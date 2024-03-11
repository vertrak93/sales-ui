import { Route } from '@angular/router';
import { authGuard } from '../../shared/guards/auth.guard';

export const ROUTES: Route[] = [
    {
        path: '',
        loadComponent: ()=> import('./user.component').then((c) => c.UserComponent),
        canActivate: [authGuard],
    },
    {
        path: 'add',
        loadComponent: ()=> import('./user-add/user-add.component').then((c) => c.UserAddComponent),
        canActivate: [authGuard],
    },
    {
        path: 'edit',
        loadComponent: ()=> import('./user-add/user-add.component').then((c) => c.UserAddComponent),
        canActivate: [authGuard],
    },
];