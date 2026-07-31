import { TestBed } from '@angular/core/testing';
import { FeatureActionsFacade } from './feature-actions.facade';

describe('FeatureActionsFacade', () => {
  it('owns selection flow outside the rendering core', () => {
    TestBed.configureTestingModule({
      providers: [FeatureActionsFacade],
    });
    const facade = TestBed.inject(FeatureActionsFacade);

    facade.select({
      id: 'architecture',
      title: 'Stable rendering contract',
      description: 'Example',
    });

    expect(facade.selectedId()).toBe('architecture');
    expect(facade.selectedTitle()).toBe('Stable rendering contract');

    facade.reset();
    expect(facade.selectedId()).toBeNull();
  });
});
