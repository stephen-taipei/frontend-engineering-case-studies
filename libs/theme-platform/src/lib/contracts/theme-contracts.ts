export const DEMO_THEMES = ['default', 'aurora', 'summit'] as const;

export type DemoTheme = (typeof DEMO_THEMES)[number];

export type ThemeDensity = 'comfortable' | 'compact';

export interface ThemeAppearance {
  readonly ctaLabel: string;
  readonly density: ThemeDensity;
  readonly description: string;
  readonly eyebrow: string;
  readonly id: DemoTheme;
  readonly label: string;
  readonly stylesheetHref: `themes/${string}.css`;
}

export interface ShowcaseItem {
  readonly description: string;
  readonly id: string;
  readonly title: string;
}
