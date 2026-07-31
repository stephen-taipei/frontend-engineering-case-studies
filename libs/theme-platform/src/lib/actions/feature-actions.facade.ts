import { Injectable, signal } from '@angular/core';
import { ShowcaseItem } from '../contracts/theme-contracts';

@Injectable()
export class FeatureActionsFacade {
  readonly #selectedId = signal<string | null>(null);

  readonly selectedId = this.#selectedId.asReadonly();

  select(item: ShowcaseItem): void {
    this.#selectedId.set(item.id);
  }

  reset(): void {
    this.#selectedId.set(null);
  }
}
