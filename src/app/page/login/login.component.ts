import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LoginService } from '../../shared/services/login.service';
import { AuthenticateDto } from '../../shared/api/models';
import { AuthService } from '../../shared/api/services';
import { EMPTY, Subject, catchError, debounceTime, exhaustMap, filter, finalize, from, map, of, takeUntil, tap } from 'rxjs';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  formBuilder:FormBuilder = inject(FormBuilder);
  routerSrv:Router = inject(Router);
  loginSrv:LoginService = inject(LoginService);
  authSrv:AuthService = inject(AuthService);

  submitted$: Subject<void> = new Subject();
  stop$: Subject<void> = new Subject<void>();

  loginForm = this.initializeForm();
  showPassword = false;
  disabledLogin = false;
  errorLogin = false;
  errorText = '';

  initializeForm(){
    return this.formBuilder.group({
      username: ['', [Validators.required,Validators.maxLength(50)]],
      password: ['', [Validators.required,Validators.maxLength(50)]]
    });
  } 

  ngOnInit(){
    this.onSubmit();
  }

  onSubmit(){
    this.submitted$.pipe(
      filter(() => this.loginForm.valid),
      tap(() => this.disabledLogin = true),
      map(() => this.loginForm.value as AuthenticateDto),
      exhaustMap((value) => this.authSrv.apiAuthLoginPost$Json( { body: value} )
      .pipe(
        tap( (res) => this.loginSrv.HandleLogin(res)),
        finalize( () => this.disabledLogin = false),
        catchError( async (ex) => this.handlerError(ex) )
      )),
      takeUntil(this.stop$)
    ).subscribe();
  }

  handlerError(ex:any){
    this.errorText = ex.error?.message ? ex.error.message : ex.message;
    this.errorLogin = true;
    this.disabledLogin = false;
  }

  ngOnDestroy(): void {
    this.stop();
  }

  stop(){
    this.stop$.next();
    this.stop$.complete();
  }

}
