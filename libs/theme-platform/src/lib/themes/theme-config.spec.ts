import { DEMO_THEMES } from '../contracts/theme-contracts';
import { THEME_APPEARANCES } from './theme-config';

describe('THEME_APPEARANCES', () => {
  it('keeps every declared family member complete', () => {
    expect(Object.keys(THEME_APPEARANCES)).toEqual([...DEMO_THEMES]);

    for (const theme of DEMO_THEMES) {
      const appearance = THEME_APPEARANCES[theme];

      expect(appearance.id).toBe(theme);
      expect(appearance.label.length).toBeGreaterThan(0);
      expect(appearance.description.length).toBeGreaterThan(0);
      expect(appearance.stylesheetHref).toBe(`themes/${theme}.css`);
    }
  });
});
