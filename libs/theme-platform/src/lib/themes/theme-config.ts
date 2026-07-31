import { DemoTheme, ThemeAppearance } from '../contracts/theme-contracts';

export const THEME_APPEARANCES = {
  default: {
    id: 'default',
    label: 'Foundation',
    eyebrow: 'default leaf · complete config',
    description:
      'A neutral fallback that uses the same rendering and behavior contracts as every named theme.',
    ctaLabel: 'Clear shared selection',
    density: 'comfortable',
    stylesheetHref: 'themes/default.css',
  },
  aurora: {
    id: 'aurora',
    label: 'Aurora',
    eyebrow: 'theme leaf · isolated appearance',
    description:
      'A vivid theme that changes tokens and density without duplicating shared DOM or interaction flow.',
    ctaLabel: 'Reset Aurora selection',
    density: 'comfortable',
    stylesheetHref: 'themes/aurora.css',
  },
  summit: {
    id: 'summit',
    label: 'Summit',
    eyebrow: 'theme leaf · isolated appearance',
    description:
      'A compact dark theme that demonstrates structural stability across a complete sibling family.',
    ctaLabel: 'Reset Summit selection',
    density: 'compact',
    stylesheetHref: 'themes/summit.css',
  },
} satisfies Record<DemoTheme, ThemeAppearance>;
