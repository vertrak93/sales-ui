import { Route } from '@angular/router';
import { authGuard } from '../../../shared/guards/auth.guard';

export const ROUTES: Route[] = [
    {
        path: '',
        loadComponent: ()=> import('./category.component').then((c) => c.CategoryComponent),
        canActivate: [authGuard],
    },
    {
        path: 'add',
        loadComponent: ()=> import('./category-add/category-add.component').then((c) => c.CategoryAddComponent),
        canActivate: [authGuard],
    },
    {
        path: 'edit',
        loadComponent: ()=> import('./category-add/category-add.component').then((c) => c.CategoryAddComponent),
        canActivate: [authGuard],
    },
];