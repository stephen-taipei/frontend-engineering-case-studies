import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { ThemeStylesheetLoader } from './theme-stylesheet.loader';

describe('ThemeStylesheetLoader', () => {
  afterEach(() => {
    document.getElementById('case-study-theme-stylesheet')?.remove();
  });

  it('keeps exactly one on-demand theme stylesheet active', () => {
    TestBed.configureTestingModule({
      providers: [ThemeStylesheetLoader],
    });
    const loader = TestBed.inject(ThemeStylesheetLoader);
    const currentDocument = TestBed.inject(DOCUMENT);

    loader.load('themes/default.css');
    loader.load('themes/aurora.css');

    const links = currentDocument.querySelectorAll(
      '#case-study-theme-stylesheet',
    );
    expect(links).toHaveLength(1);
    expect(links[0]?.getAttribute('href')).toBe('themes/aurora.css');
  });
});
