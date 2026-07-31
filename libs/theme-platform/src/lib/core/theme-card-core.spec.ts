import { TestBed } from '@angular/core/testing';
import { DEMO_COPY } from '../localization/demo-copy';
import { THEME_APPEARANCES } from '../themes/theme-config';
import { ThemeCardCoreComponent } from './theme-card-core';

describe('ThemeCardCoreComponent', () => {
  it('renders typed inputs without importing theme selection logic', async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeCardCoreComponent],
    }).compileComponents();
    const fixture = TestBed.createComponent(ThemeCardCoreComponent);

    fixture.componentRef.setInput('appearance', THEME_APPEARANCES.default);
    fixture.componentRef.setInput('content', DEMO_COPY.en.themes.default);
    fixture.componentRef.setInput('items', [
      {
        id: 'contract',
        title: 'Stable contract',
        description: 'Typed inputs only',
      },
    ]);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('h2')?.textContent).toContain(
      'Foundation',
    );
    expect(
      fixture.nativeElement.querySelector(
        '[data-rendering-contract="default"]',
      ),
    ).toBeTruthy();
  });
});
