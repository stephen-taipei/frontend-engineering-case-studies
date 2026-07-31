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
});
