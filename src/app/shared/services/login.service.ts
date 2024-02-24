import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiResponseDto, AuthenticateDto } from '../api/models';
import { AuthService } from '../api/services';

const defaultPath = '/';  

export interface IUser {
  userId: number
  username: string
  fisrtName: string
  lastName: string
  email: string
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _lastAuthenticatedPath: string = defaultPath;
  private _user!: IUser;

  constructor(private router: Router, private authSrv:AuthService) { }

  set lastAuthenticatedPath(value: string) {
    this._lastAuthenticatedPath = value;
  }

  getUser(){
    const session = JSON.parse(atob(localStorage.getItem('session')!)) as IUser;
    return session;
  }

  get loggedIn(): boolean {

    const session = (localStorage.getItem('session') ?? '').length > 0;
    const jwt = (localStorage.getItem('jwt') ?? '').length > 0;
    const refreshToken = (localStorage.getItem('refreshToken') ?? '').length > 0;

    return jwt && session && refreshToken;
  }

  async logOut() {
    localStorage.removeItem('session');
    localStorage.removeItem('jwt');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }

  HandleLogin(resp: ApiResponseDto){
    const user = resp.data.user;
    const jwt = resp.data.jwt;
    const refreshToken = resp.data.refreshToken;
    const role = resp.data.role;

    localStorage.setItem('session', btoa( JSON.stringify(user)));
    localStorage.setItem('jwt', btoa( JSON.stringify(jwt)));
    localStorage.setItem('refreshToken', btoa( JSON.stringify(refreshToken)));
    localStorage.setItem('role', btoa( JSON.stringify(role)));

    this.router.navigate([this._lastAuthenticatedPath]);
  }

}
