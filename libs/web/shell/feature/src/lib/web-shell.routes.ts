import { Route } from '@angular/router';
import { WebLayoutComponent } from '@digi/web/shell/ui/web-layout';
import { LoginPageComponent } from '@digi/web/auth/feature';
import { AuthGuard } from '@digi/web/shared/guards/auth-guard';

export const webShellRoutes: Route[] = [
  {
    path: '',
    component: WebLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: async () => (await import('@digi/web/landing-page/feature')).LandingPageModule
      }
    ]
  },
  {
    path: 'home',
    component: WebLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: async () => (await import('@digi/web/home-page/feature')).HomePageModule,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'login',
    component: LoginPageComponent
  }
];
