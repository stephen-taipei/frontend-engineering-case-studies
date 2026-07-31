import { DemoTheme, ThemeAppearance } from '../contracts/theme-contracts';

export const THEME_APPEARANCES = {
  default: {
    id: 'default',
    density: 'comfortable',
    stylesheetHref: 'themes/default.css',
  },
  aurora: {
    id: 'aurora',
    density: 'comfortable',
    stylesheetHref: 'themes/aurora.css',
  },
  summit: {
    id: 'summit',
    density: 'compact',
    stylesheetHref: 'themes/summit.css',
  },
} satisfies Record<DemoTheme, ThemeAppearance>;
