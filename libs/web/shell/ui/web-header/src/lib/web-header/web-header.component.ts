import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'digi-web-header',
  templateUrl: './web-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WebHeaderComponent {}
