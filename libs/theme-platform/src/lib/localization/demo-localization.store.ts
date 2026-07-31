import { DOCUMENT } from '@angular/common';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { DemoLocale } from '../contracts/theme-contracts';
import { DEMO_COPY } from './demo-copy';

@Injectable({ providedIn: 'root' })
export class DemoLocalizationStore {
  readonly #document = inject(DOCUMENT);
  readonly #locale = signal<DemoLocale>('en');

  readonly copy = computed(() => DEMO_COPY[this.#locale()]);
  readonly locale = this.#locale.asReadonly();

  constructor() {
    effect(() => {
      const copy = this.copy();
      this.#document.documentElement.lang = copy.htmlLang;
      this.#document.title = copy.documentTitle;
      this.#document
        .querySelector<HTMLMetaElement>('meta[name="description"]')
        ?.setAttribute('content', copy.metaDescription);
    });
  }

  setLocale(locale: DemoLocale): void {
    this.#locale.set(locale);
  }
}
