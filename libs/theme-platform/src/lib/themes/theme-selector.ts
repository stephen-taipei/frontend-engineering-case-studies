import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DemoTheme } from '../contracts/theme-contracts';
import { ThemeAuroraComponent } from './theme-aurora';
import { ThemeDefaultComponent } from './theme-default';
import { ThemeSummitComponent } from './theme-summit';

@Component({
  selector: 'case-study-theme-selector',
  imports: [ThemeAuroraComponent, ThemeDefaultComponent, ThemeSummitComponent],
  template: `
    @switch (theme()) {
      @case ('aurora') {
        <case-study-theme-aurora />
      }
      @case ('summit') {
        <case-study-theme-summit />
      }
      @default {
        <case-study-theme-default />
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSelectorComponent {
  readonly theme = input.required<DemoTheme>();
}
