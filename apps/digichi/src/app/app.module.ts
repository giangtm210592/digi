import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { WebShellModule } from '@digi/web/shell/feature';
import { getAppConfigProvider } from '@digi/web/shared/app-config';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, HttpClientModule, WebShellModule],
  providers: [getAppConfigProvider(environment)],
  bootstrap: [AppComponent]
})
export class AppModule {}
