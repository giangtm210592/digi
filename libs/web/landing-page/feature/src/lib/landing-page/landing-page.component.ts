import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'digi-landing-page',
  templateUrl: './landing-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageComponent {}
