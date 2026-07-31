import { computed, inject, Injectable } from '@angular/core';
import { DemoLocalizationStore } from '../localization/demo-localization.store';

@Injectable()
export class FeatureDataService {
  readonly #localization = inject(DemoLocalizationStore);

  readonly items = computed(() => this.#localization.copy().items);
}
