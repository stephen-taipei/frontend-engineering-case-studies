import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { FeatureActionsFacade } from '../actions/feature-actions.facade';
import { ShowcaseItem, ThemeAppearance } from '../contracts/theme-contracts';
import { ThemeCardCoreComponent } from '../core/theme-card-core';
import { FeatureDataService } from '../data/feature-data.service';
import { DemoLocalizationStore } from '../localization/demo-localization.store';

@Component({
  selector: 'case-study-theme-card-view',
  imports: [ThemeCardCoreComponent],
  providers: [FeatureActionsFacade, FeatureDataService],
  template: `
    <case-study-theme-card-core
      [appearance]="appearance()"
      [content]="themeContent()"
      [items]="data.items()"
      [selectedId]="actions.selectedId()"
      (itemSelected)="select($event)"
      (selectionCleared)="actions.reset()"
    />
    <p class="selection-status" aria-live="polite">
      @if (selectedTitle(); as title) {
        {{ copy().selection.selectedPrefix }} <strong>{{ title }}</strong>
      } @else {
        {{ copy().selection.prompt }}
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
  readonly #localization = inject(DemoLocalizationStore);
  protected readonly copy = this.#localization.copy;
  protected readonly selectedTitle = computed(() => {
    const selectedId = this.actions.selectedId();
    return (
      this.data.items().find((item) => item.id === selectedId)?.title ?? null
    );
  });
  protected readonly themeContent = computed(
    () => this.copy().themes[this.appearance().id],
  );

  protected select(item: ShowcaseItem): void {
    this.actions.select(item);
  }
}
