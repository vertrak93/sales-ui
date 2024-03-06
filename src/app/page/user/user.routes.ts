import { Route } from '@angular/router';
import { UserComponent } from './user.component';
import { authGuard } from '../../shared/guards/auth.guard';
import { UserAddComponent } from './user-add/user-add.component';

export const USER_ROUTES: Route[] = [
    {
        path: '',
        component: UserComponent,
        canActivate: [authGuard],
    },
    {
        path: 'add',
        component: UserAddComponent,
        canActivate: [authGuard],
    },
    {
        path: 'edit',
        component: UserAddComponent,
        canActivate: [authGuard],
    },
];