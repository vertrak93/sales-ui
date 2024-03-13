import { Route } from '@angular/router';
import { authGuard } from '../../../shared/guards/auth.guard';

export const ROUTES: Route[] = [
    {
        path: '',
        loadComponent: ()=> import('./presentation.component').then((c) => c.PresentationComponent),
        canActivate: [authGuard],
    },
    {
        path: 'add',
        loadComponent: ()=> import('./presentation-add/presentation-add.component').then((c) => c.PresentationAddComponent),
        canActivate: [authGuard],
    },
    {
        path: 'edit',
        loadComponent: ()=> import('./presentation-add/presentation-add.component').then((c) => c.PresentationAddComponent),
        canActivate: [authGuard],
    },
];