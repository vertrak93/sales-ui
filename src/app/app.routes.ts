import { Routes } from '@angular/router';
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
        loadChildren: () => import('./pages/user/user.routes').then((m) => m.ROUTES)
    },
    {
        path: 'brand',
        loadChildren: () => import('./pages/products/brand/brand.routes').then((m) => m.ROUTES)
    },
    {
        path: 'category',
        loadChildren: () => import('./pages/products/category/category.routes').then((m) => m.ROUTES)
    },
    {
        path: 'presentation',
        loadChildren: () => import('./pages/products/presentation/presentation.routes').then((m) => m.ROUTES)
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
