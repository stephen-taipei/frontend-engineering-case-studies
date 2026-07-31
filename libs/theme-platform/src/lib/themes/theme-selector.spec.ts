import { TestBed } from '@angular/core/testing';
import { DEMO_THEMES } from '../contracts/theme-contracts';
import { ThemeSelectorComponent } from './theme-selector';

describe('ThemeSelectorComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeSelectorComponent],
    }).compileComponents();
  });

  it.each(DEMO_THEMES)('renders the %s family leaf', (theme) => {
    const fixture = TestBed.createComponent(ThemeSelectorComponent);
    fixture.componentRef.setInput('theme', theme);
    fixture.detectChanges();

    expect(
      fixture.nativeElement.querySelector(`[data-theme-leaf="${theme}"]`),
    ).toBeTruthy();
  });
});
