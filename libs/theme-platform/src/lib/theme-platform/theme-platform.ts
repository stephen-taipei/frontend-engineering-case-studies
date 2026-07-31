import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  signal,
} from '@angular/core';
import { DEMO_THEMES, DemoTheme } from '../contracts/theme-contracts';
import { THEME_APPEARANCES } from '../themes/theme-config';
import { ThemeSelectorComponent } from '../themes/theme-selector';
import { ThemeStylesheetLoader } from '../themes/theme-stylesheet.loader';

@Component({
  selector: 'case-study-theme-platform',
  imports: [ThemeSelectorComponent],
  templateUrl: './theme-platform.html',
  styleUrl: './theme-platform.scss',
  providers: [ThemeStylesheetLoader],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemePlatform {
  readonly #stylesheetLoader = inject(ThemeStylesheetLoader);

  protected readonly appearances = THEME_APPEARANCES;
  protected readonly selectedTheme = signal<DemoTheme>('default');
  protected readonly themes = DEMO_THEMES;

  constructor() {
    effect(() => {
      const appearance = THEME_APPEARANCES[this.selectedTheme()];
      this.#stylesheetLoader.load(appearance.stylesheetHref);
    });
  }

  protected selectTheme(theme: DemoTheme): void {
    this.selectedTheme.set(theme);
  }
}
