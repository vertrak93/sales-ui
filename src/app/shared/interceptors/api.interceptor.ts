import { HttpErrorResponse, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../services/login.service';
import { BehaviorSubject, catchError, filter, switchMap, take, throwError } from 'rxjs';
import { TokenDto, UserDto } from '../api/models';
import { AuthService } from '../api/services';
import { Alerts } from '../utils/alerts';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {

  const jwtInterceptorSrv: ApiInterceptorService = inject(ApiInterceptorService);
  const cookieService: CookieService = inject(CookieService);

  const jwt: string = cookieService.get('jwt');

  if(jwt){
    req = jwtInterceptorSrv.addTokenHeader(req, jwt);
  }

  return next(req).pipe(
    catchError(  (err: HttpErrorResponse) => {
      if (err.status === 401) {
        return jwtInterceptorSrv.handle401Error(req, next, err)
      }
      jwtInterceptorSrv.handleError(err);
      return throwError( () => err );
    })
  );
};

@Injectable()
export class ApiInterceptorService{
  private cookieService: CookieService = inject(CookieService);
  private loginSrv: LoginService = inject(LoginService);
  private authSrv: AuthService = inject(AuthService);
  private alert: Alerts = inject(Alerts);

  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  public handle401Error(request: HttpRequest<any>, next: HttpHandlerFn, err: HttpErrorResponse) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);
      const jwt = this.cookieService.get('jwt');
      const refreshToken = this.cookieService.get('refreshToken');
      const user = this.loginSrv.getUser();

      let token:TokenDto = { jwt: jwt, refreshToken: refreshToken, user: user };

      if (refreshToken){
        return this.authSrv.apiAuthRefreshTokenPost$Json( {body: token} ).pipe(
          switchMap((resp) => {
            this.isRefreshing = false;

            this.cookieService.set('jwt', resp.data.jwt, { path: '/'});
            this.cookieService.set('refreshToken', resp.data.refreshToken, { path: '/'});
            this.refreshTokenSubject.next(resp.data.jwt);
            
            return next(this.addTokenHeader(request,  resp.data.jwt));
          }),
          catchError((err) => {
            this.isRefreshing = false 
            this.loginSrv.logOut();

            return throwError( () => err);
          })
        );
      }
    }

    return this.refreshTokenSubject.pipe(
      filter(token => token !== null),
      take(1),
      switchMap((token) => next(this.addTokenHeader(request, token)))
    );
  }

  public addTokenHeader(request: HttpRequest<any>, token: string) {
    return request.clone({
      headers: request.headers.set("Authorization", `Bearer ${token}`)
    });
  }

  public handleError(err: HttpErrorResponse){
    const error = err.error.message ? err.error.message : err.message;
    this.alert.Toast(error, 'error');
  }

}