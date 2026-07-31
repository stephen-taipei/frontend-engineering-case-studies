import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeCardViewComponent } from '../view/theme-card-view';
import { THEME_APPEARANCES } from './theme-config';

@Component({
  selector: 'case-study-theme-summit',
  imports: [ThemeCardViewComponent],
  template:
    '<case-study-theme-card-view [appearance]="appearance" data-theme-leaf="summit" />',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSummitComponent {
  protected readonly appearance = THEME_APPEARANCES.summit;
}
