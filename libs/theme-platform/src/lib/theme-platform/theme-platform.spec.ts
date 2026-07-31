import { TestBed } from '@angular/core/testing';
import { ThemePlatform } from './theme-platform';

describe('ThemePlatform', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemePlatform],
    }).compileComponents();
  });

  it('switches between every configured theme', async () => {
    const fixture = TestBed.createComponent(ThemePlatform);
    await fixture.whenStable();
    const host = fixture.nativeElement as HTMLElement;

    const buttons = [
      ...host.querySelectorAll<HTMLButtonElement>('[data-theme-option]'),
    ];

    expect(buttons).toHaveLength(3);

    buttons[1]?.click();
    fixture.detectChanges();

    expect(host.querySelector('[data-theme-leaf="aurora"]')).toBeTruthy();
  });

  it('switches all visible content to Traditional Chinese', async () => {
    const fixture = TestBed.createComponent(ThemePlatform);
    await fixture.whenStable();
    const host = fixture.nativeElement as HTMLElement;
    const localeButtons = [
      ...host.querySelectorAll<HTMLButtonElement>('[data-locale-option]'),
    ];

    expect(localeButtons).toHaveLength(2);

    localeButtons[1]?.click();
    fixture.detectChanges();

    expect(host.querySelector('h1')?.textContent).toContain('複雜多主題');
    expect(host.textContent).toContain('切換主題，不改變共用契約');
    expect(document.documentElement.lang).toBe('zh-Hant');

    localeButtons[0]?.click();
    fixture.detectChanges();
    expect(document.documentElement.lang).toBe('en');
  });
});
