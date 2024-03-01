import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiResponseDto, AuthenticateDto, UserDto } from '../api/models';
import { AuthService } from '../api/services';
import { HttpContextToken } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

const defaultPath = '/';  

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _lastAuthenticatedPath: string = defaultPath;
  private _user!: UserDto;

  constructor(private router: Router, private authSrv:AuthService, private cookieSrv: CookieService) { }

  set lastAuthenticatedPath(value: string) {
    this._lastAuthenticatedPath = value;
  }
  
  getUser(){
    const session = JSON.parse(atob(localStorage.getItem('session')!)) as UserDto;
    return session;
  }

  get loggedIn(): boolean {

    const session = (localStorage.getItem('session') ?? '').length > 0;
    const roles = (localStorage.getItem('role') ?? '').length > 0;
    const jwt = this.cookieSrv.check('jwt');
    const refreshToken = this.cookieSrv.check('refreshToken');

    return jwt && session && refreshToken && roles;
  }

  async logOut() {

    this.cookieSrv.delete('jwt');
    this.cookieSrv.delete('refreshToken');
    localStorage.removeItem('session');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }

  HandleLogin(resp: ApiResponseDto){
    const user = resp.data.user;
    const jwt = resp.data.jwt;
    const refreshToken = resp.data.refreshToken;
    const role = resp.data.role;

    this.cookieSrv.set('jwt', jwt, {path: '/', secure: true});
    this.cookieSrv.set('refreshToken', refreshToken, {path: '/', secure: true});
    localStorage.setItem('session', btoa( JSON.stringify(user)));
    localStorage.setItem('role', btoa( JSON.stringify(role)));

    this.router.navigate([this._lastAuthenticatedPath]);

    HttpContextToken
  }

}
