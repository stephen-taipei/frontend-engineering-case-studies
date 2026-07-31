import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { ThemeAppearance } from '../contracts/theme-contracts';

@Injectable()
export class ThemeStylesheetLoader {
  readonly #document = inject(DOCUMENT);

  load(href: ThemeAppearance['stylesheetHref']): void {
    const id = 'case-study-theme-stylesheet';
    const existing = this.#document.getElementById(
      id,
    ) as HTMLLinkElement | null;
    const link = existing ?? this.#document.createElement('link');

    link.id = id;
    link.rel = 'stylesheet';

    if (link.getAttribute('href') !== href) {
      link.setAttribute('href', href);
    }

    if (!existing) {
      this.#document.head.append(link);
    }
  }
}
