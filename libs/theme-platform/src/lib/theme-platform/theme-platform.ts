import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { DemoColorModeStore } from '../color-mode/demo-color-mode.store';
import {
  DEMO_THEMES,
  DemoLocale,
  DemoTheme,
} from '../contracts/theme-contracts';
import { DemoLocalizationStore } from '../localization/demo-localization.store';
import { THEME_APPEARANCES } from '../themes/theme-config';
import { ThemeSelectorComponent } from '../themes/theme-selector';
import { ThemeStylesheetLoader } from '../themes/theme-stylesheet.loader';

@Component({
  selector: 'case-study-theme-platform',
  imports: [ThemeSelectorComponent],
  templateUrl: './theme-platform.html',
  styleUrl: './theme-platform.scss',
  providers: [DemoColorModeStore, DemoLocalizationStore, ThemeStylesheetLoader],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemePlatform {
  readonly #colorModeStore = inject(DemoColorModeStore);
  readonly #stylesheetLoader = inject(ThemeStylesheetLoader);
  readonly #localization = inject(DemoLocalizationStore);

  protected readonly appearances = THEME_APPEARANCES;
  protected readonly colorMode = this.#colorModeStore.mode;
  protected readonly copy = this.#localization.copy;
  protected readonly colorModeLabel = computed(() =>
    this.colorMode() === 'dark'
      ? this.copy().colorMode.toLight
      : this.copy().colorMode.toDark,
  );
  protected readonly locale = this.#localization.locale;
  protected readonly localeOptions = [
    { id: 'en', label: 'EN', lang: 'en' },
    { id: 'zh-TW', label: '繁中', lang: 'zh-Hant' },
  ] as const;
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

  protected setLocale(locale: DemoLocale): void {
    this.#localization.setLocale(locale);
  }

  protected toggleColorMode(): void {
    this.#colorModeStore.toggle();
  }
}
