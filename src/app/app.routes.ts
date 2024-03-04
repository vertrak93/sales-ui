import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { authGuard } from './shared/guards/auth.guard';
import { UserComponent } from './page/user/user.component';
import { UserFormComponent } from './page/user/components/user-form/user-form.component';
import { UserAddComponent } from './page/user/user-add/user-add.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [authGuard]
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [authGuard]
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [authGuard]
    },
    {
        path: 'user',
        children: [
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
        ]
    },
    {
        path: '**',
        redirectTo: '/home'
    }
];
