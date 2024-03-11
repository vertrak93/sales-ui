import { Route } from '@angular/router';
import { authGuard } from '../../../shared/guards/auth.guard';

export const ROUTES: Route[] = [
    {
        path: '',
        loadComponent: ()=> import('./brand.component').then((c) => c.BrandComponent),
        canActivate: [authGuard],
    },
    {
        path: 'add',
        loadComponent: ()=> import('./brand-add/brand-add.component').then((c) => c.BrandAddComponent),
        canActivate: [authGuard],
    },
    {
        path: 'edit',
        loadComponent: ()=> import('./brand-add/brand-add.component').then((c) => c.BrandAddComponent),
        canActivate: [authGuard],
    },
];