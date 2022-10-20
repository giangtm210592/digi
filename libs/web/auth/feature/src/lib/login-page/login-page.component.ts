import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'digi-login-page',
  templateUrl: './login-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent {}
