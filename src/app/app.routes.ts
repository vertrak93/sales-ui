import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        loadComponent: ()=> import('./pages/home/home.component').then((c) => c.HomeComponent),
        canActivate: [authGuard]
    },
    {
        path: 'home',
        loadComponent: ()=> import('./pages/home/home.component').then((c) => c.HomeComponent),
        canActivate: [authGuard]
    },
    {
        path: 'login',
        loadComponent: ()=> import('./pages/login/login.component').then((c) => c.LoginComponent),
        canActivate: [authGuard]
    },
    {
        path: 'user',
        loadChildren: () => import('./pages/user/user.routes').then((m) => m.USER_ROUTES)
    },
    {
        path: 'brand',
        loadChildren: () => import('./pages/brand/brand.routes').then((m) => m.BRAND_ROUTES)
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
