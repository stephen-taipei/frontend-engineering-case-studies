import { Injectable, signal } from '@angular/core';
import { ShowcaseItem } from '../contracts/theme-contracts';

@Injectable()
export class FeatureActionsFacade {
  readonly #selectedId = signal<string | null>(null);
  readonly #selectedTitle = signal<string | null>(null);

  readonly selectedId = this.#selectedId.asReadonly();
  readonly selectedTitle = this.#selectedTitle.asReadonly();

  select(item: ShowcaseItem): void {
    this.#selectedId.set(item.id);
    this.#selectedTitle.set(item.title);
  }

  reset(): void {
    this.#selectedId.set(null);
    this.#selectedTitle.set(null);
  }
}
