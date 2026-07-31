import { DOCUMENT } from '@angular/common';
import { effect, inject, Injectable, signal } from '@angular/core';
import { DemoColorMode } from '../contracts/theme-contracts';

const STORAGE_KEY = 'frontend-case-study-color-mode';

@Injectable({ providedIn: 'root' })
export class DemoColorModeStore {
  readonly #document = inject(DOCUMENT);
  readonly #mode = signal<DemoColorMode>(this.#resolveInitialMode());

  readonly mode = this.#mode.asReadonly();

  constructor() {
    effect(() => {
      this.#document.documentElement.dataset['colorMode'] = this.#mode();
    });
  }

  toggle(): void {
    this.setMode(this.#mode() === 'dark' ? 'light' : 'dark');
  }

  setMode(mode: DemoColorMode): void {
    this.#mode.set(mode);

    try {
      this.#document.defaultView?.localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      // Storage can be unavailable in restricted or file:// browser contexts.
    }
  }

  #resolveInitialMode(): DemoColorMode {
    const view = this.#document.defaultView;

    try {
      const storedMode = view?.localStorage.getItem(STORAGE_KEY);
      if (storedMode === 'light' || storedMode === 'dark') {
        return storedMode;
      }
    } catch {
      // Fall back to the system preference when storage is unavailable.
    }

    return view?.matchMedia?.('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }
}
