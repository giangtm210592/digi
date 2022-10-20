import { Route } from '@angular/router';
import { WebLayoutComponent } from '@digi/web/shell/ui/web-layout';
import { LoginPageComponent } from '@digi/web/auth/feature';

export const webShellRoutes: Route[] = [
  {
    path: '',
    component: WebLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: async () => (await import('@digi/web/home-page/feature')).HomePageModule
      }
    ]
  },
  {
    path: 'login',
    component: LoginPageComponent
  }
];
