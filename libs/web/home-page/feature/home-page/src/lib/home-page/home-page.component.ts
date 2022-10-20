import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'digi-home-page',
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {}
