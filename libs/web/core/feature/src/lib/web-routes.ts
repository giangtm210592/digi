import { Route } from '@angular/router';
import { LandingPageComponent } from '@digi/web/features/landing-page';
import { WebLayoutComponent } from '@digi/web/core/ui/web-layout';
import { AuthGuard } from '@digi/web/shared/guards/auth-guard';

export const webRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingPageComponent
  },
  {
    path: 'login',
    loadChildren: async () => (await import('@digi/web/features/login-page')).LoginPageModule
  },
  {
    path: '',
    component: WebLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: async () => (await import('@digi/web/features/home-page')).HomePageModule,
        canActivate: [AuthGuard]
      }
    ]
  }
];
