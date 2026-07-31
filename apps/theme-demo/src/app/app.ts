import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemePlatform } from '@frontend-engineering-case-studies/theme-platform';

@Component({
  imports: [ThemePlatform],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
