import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { authGuard } from './shared/guards/auth.guard';
import { UserComponent } from './page/user/user.component';

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
        component: UserComponent,
        canActivate: [authGuard]
    },
    {
        path: '**',
        redirectTo: '/home'
    }
];
