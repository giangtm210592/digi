import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { getAppConfigProvider } from '@digi/web/shared/app-config';
import { environment } from '../environments/environment';
import { authInterceptorProvider } from '@digi/web/shared/interceptors/auth-interceptor';
import { CoreModule } from '@digi/web/core';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, HttpClientModule, CoreModule],
  providers: [getAppConfigProvider(environment), authInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule {}
