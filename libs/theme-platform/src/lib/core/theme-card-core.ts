import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { ShowcaseItem, ThemeAppearance } from '../contracts/theme-contracts';

@Component({
  selector: 'case-study-theme-card-core',
  templateUrl: './theme-card-core.html',
  styleUrl: './theme-card-core.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeCardCoreComponent {
  readonly appearance = input.required<ThemeAppearance>();
  readonly items = input.required<readonly ShowcaseItem[]>();
  readonly selectedId = input<string | null>(null);

  readonly itemSelected = output<ShowcaseItem>();
  readonly selectionCleared = output<void>();
}
