import { DEMO_LOCALES, DEMO_THEMES } from '../contracts/theme-contracts';
import { DEMO_COPY } from './demo-copy';

describe('DEMO_COPY', () => {
  it('keeps locale, theme, and item families complete', () => {
    expect(Object.keys(DEMO_COPY)).toEqual([...DEMO_LOCALES]);

    const expectedItemIds = ['architecture', 'ownership', 'delivery'];

    for (const locale of DEMO_LOCALES) {
      const copy = DEMO_COPY[locale];

      expect(copy.documentTitle.length).toBeGreaterThan(0);
      expect(Object.keys(copy.themes)).toEqual([...DEMO_THEMES]);
      expect(copy.items.map((item) => item.id)).toEqual(expectedItemIds);

      for (const theme of DEMO_THEMES) {
        expect(copy.themes[theme].label.length).toBeGreaterThan(0);
        expect(copy.themes[theme].description.length).toBeGreaterThan(0);
      }
    }
  });
});
