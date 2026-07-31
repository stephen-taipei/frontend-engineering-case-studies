import { Injectable, signal } from '@angular/core';
import { ShowcaseItem } from '../contracts/theme-contracts';

@Injectable()
export class FeatureDataService {
  readonly items = signal<readonly ShowcaseItem[]>([
    {
      id: 'architecture',
      title: 'Stable rendering contract',
      description:
        'Core receives typed inputs and emits intent without knowing theme names.',
    },
    {
      id: 'ownership',
      title: 'Explicit ownership',
      description:
        'Leaf themes own complete appearance config and stylesheet selection.',
    },
    {
      id: 'delivery',
      title: 'Predictable delivery',
      description:
        'Views wire shared data and actions while facades isolate side effects.',
    },
  ]);
}
