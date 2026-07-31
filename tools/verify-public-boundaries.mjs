import { readdir, readFile } from 'node:fs/promises';
import { extname, join, relative } from 'node:path';

const root = process.cwd();
const excludedDirectories = new Set([
  '.angular',
  '.git',
  '.nx',
  'coverage',
  'dist',
  'node_modules',
]);
const inspectedExtensions = new Set([
  '',
  '.css',
  '.html',
  '.json',
  '.md',
  '.mjs',
  '.scss',
  '.ts',
  '.yaml',
  '.yml',
]);
const self = 'tools/verify-public-boundaries.mjs';

const forbiddenPatterns = [
  { label: 'absolute macOS user path', pattern: /\/Users\/[^/\s]+/u },
  { label: 'absolute Windows user path', pattern: /[A-Z]:\\Users\\/u },
  { label: 'private key material', pattern: /BEGIN [A-Z ]*PRIVATE KEY/u },
  { label: 'GitHub token', pattern: /\b(?:github_pat_|gh[opsu]_)[:\w-]+/u },
  { label: 'AWS access key', pattern: /\bAKIA[0-9A-Z]{16}\b/u },
  { label: 'Slack token', pattern: /\bxox[abpr]-[\w-]+/u },
];

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.isDirectory() && excludedDirectories.has(entry.name)) {
      continue;
    }

    const path = join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectFiles(path)));
      continue;
    }

    if (entry.isFile() && inspectedExtensions.has(extname(entry.name))) {
      files.push(path);
    }
  }

  return files;
}

const findings = [];

for (const path of await collectFiles(root)) {
  const repositoryPath = relative(root, path);

  if (repositoryPath === self) {
    continue;
  }

  const content = await readFile(path, 'utf8');

  for (const { label, pattern } of forbiddenPatterns) {
    if (pattern.test(content)) {
      findings.push(`${repositoryPath}: ${label}`);
    }
  }
}

const claimAudit = await readFile(
  join(root, 'docs/evidence-boundaries.md'),
  'utf8',
);
const requiredBoundaries = [
  'Scope',
  'Personal role',
  'Baseline',
  'Result',
  'Not claimed',
];

for (const boundary of requiredBoundaries) {
  if (!claimAudit.includes(boundary)) {
    findings.push(`docs/evidence-boundaries.md: missing "${boundary}"`);
  }
}

if (findings.length > 0) {
  console.error('Public-boundary verification failed:');
  findings.forEach((finding) => console.error(`- ${finding}`));
  process.exitCode = 1;
} else {
  console.log('Public-boundary verification passed.');
}
