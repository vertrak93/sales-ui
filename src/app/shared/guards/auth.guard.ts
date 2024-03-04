import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  const authSrv: LoginService = inject(LoginService);
  const router: Router = inject(Router);

  const path = route.routeConfig?.path;
  const url = state.url;

  const isLogged = authSrv.loggedIn;
  const isAuthForm = ['login'].includes(path || '/');

  if(isLogged && isAuthForm){
      authSrv.lastAuthenticatedPath = '/';
      router.navigate(['/']);
      return false;
  }

  if (!isLogged && !isAuthForm) {
    router.navigate(['/login']);
  }

  if (isLogged) {
    authSrv.lastAuthenticatedPath = route.routeConfig?.path || '/';
  }

  return isLogged || isAuthForm;
};
