import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'digi-web-main-view',
  templateUrl: './web-main-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WebMainViewComponent {}
