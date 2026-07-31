export const DEMO_THEMES = ['default', 'aurora', 'summit'] as const;
export const DEMO_LOCALES = ['en', 'zh-TW'] as const;

export type DemoTheme = (typeof DEMO_THEMES)[number];
export type DemoLocale = (typeof DEMO_LOCALES)[number];

export type ThemeDensity = 'comfortable' | 'compact';

export interface ThemeAppearance {
  readonly density: ThemeDensity;
  readonly id: DemoTheme;
  readonly stylesheetHref: `themes/${string}.css`;
}

export interface ThemeContent {
  readonly ctaLabel: string;
  readonly description: string;
  readonly eyebrow: string;
  readonly label: string;
}

export interface ShowcaseItem {
  readonly description: string;
  readonly id: string;
  readonly title: string;
}

export interface ArchitectureLayerCopy {
  readonly description: string;
  readonly key: 'selector' | 'theme leaf' | 'shared view' | 'pure core';
  readonly label: string;
}

export interface MetricCopy {
  readonly context: string;
  readonly label: string;
  readonly value: string;
}

export interface DemoCopy {
  readonly architecture: {
    readonly behaviorFlow: string;
    readonly flowLabel: string;
    readonly kicker: string;
    readonly layers: readonly ArchitectureLayerCopy[];
    readonly mapLabel: string;
    readonly renderingFlow: string;
    readonly summary: string;
    readonly title: string;
  };
  readonly brandLabel: string;
  readonly documentTitle: string;
  readonly evidence: {
    readonly boundaryLabel: string;
    readonly boundaryText: string;
    readonly kicker: string;
    readonly metrics: readonly MetricCopy[];
    readonly summary: string;
    readonly title: string;
  };
  readonly footer: string;
  readonly hero: {
    readonly chips: readonly string[];
    readonly chipsLabel: string;
    readonly kicker: string;
    readonly lead: string;
    readonly title: string;
    readonly titleHighlight: string;
  };
  readonly homeLabel: string;
  readonly htmlLang: string;
  readonly items: readonly ShowcaseItem[];
  readonly languageLabel: string;
  readonly metaDescription: string;
  readonly selection: {
    readonly prompt: string;
    readonly selectedPrefix: string;
  };
  readonly skipLink: string;
  readonly sourceLabel: string;
  readonly themeSection: {
    readonly kicker: string;
    readonly summary: string;
    readonly switcherLabel: string;
    readonly title: string;
  };
  readonly themes: Readonly<Record<DemoTheme, ThemeContent>>;
}
