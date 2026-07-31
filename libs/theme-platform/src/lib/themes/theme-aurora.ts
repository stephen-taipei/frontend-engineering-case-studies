import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeCardViewComponent } from '../view/theme-card-view';
import { THEME_APPEARANCES } from './theme-config';

@Component({
  selector: 'case-study-theme-aurora',
  imports: [ThemeCardViewComponent],
  template:
    '<case-study-theme-card-view [appearance]="appearance" data-theme-leaf="aurora" />',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeAuroraComponent {
  protected readonly appearance = THEME_APPEARANCES.aurora;
}
