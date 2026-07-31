import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { FeatureActionsFacade } from '../actions/feature-actions.facade';
import { ShowcaseItem, ThemeAppearance } from '../contracts/theme-contracts';
import { ThemeCardCoreComponent } from '../core/theme-card-core';
import { FeatureDataService } from '../data/feature-data.service';

@Component({
  selector: 'case-study-theme-card-view',
  imports: [ThemeCardCoreComponent],
  providers: [FeatureActionsFacade, FeatureDataService],
  template: `
    <case-study-theme-card-core
      [appearance]="appearance()"
      [items]="data.items()"
      [selectedId]="actions.selectedId()"
      (itemSelected)="select($event)"
      (selectionCleared)="actions.reset()"
    />
    <p class="selection-status" aria-live="polite">
      @if (actions.selectedTitle(); as title) {
        Shared action selected: <strong>{{ title }}</strong>
      } @else {
        Choose a card to exercise the shared facade.
      }
    </p>
  `,
  styles: `
    .selection-status {
      margin: 1rem 0 0;
      color: var(--demo-muted, #596579);
      font-size: 0.9rem;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeCardViewComponent {
  readonly appearance = input.required<ThemeAppearance>();

  protected readonly actions = inject(FeatureActionsFacade);
  protected readonly data = inject(FeatureDataService);

  protected select(item: ShowcaseItem): void {
    this.actions.select(item);
  }
}
