import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LoginService } from '../../shared/services/common/login.service';
import { AuthenticateDto } from '../../shared/api/models';
import { AuthService } from '../../shared/api/services';
import { Subject, catchError, exhaustMap, filter, finalize, map, takeUntil, tap } from 'rxjs';
import { AutoDestroyService } from '../../shared/services/utils/auto-destroy.service';


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
  providers: [ AutoDestroyService ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private formBuilder:FormBuilder = inject(FormBuilder);
  private loginSrv:LoginService = inject(LoginService);
  private authSrv:AuthService = inject(AuthService);
  private destroy$: AutoDestroyService = inject(AutoDestroyService);

  submitted$: Subject<void> = new Subject();

  loginForm = this.formBuilder.group({
    username: ['', [Validators.required,Validators.maxLength(50)]],
    password: ['', [Validators.required,Validators.maxLength(50)]]
  });
  showPassword = false;
  disabledLogin = false;
  errorLogin = false;
  errorText = '';

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
      takeUntil(this.destroy$)
    ).subscribe();
  }

  handlerError(ex:any){
    this.errorText = ex.error?.message ? ex.error.message : ex.message;
    this.errorLogin = true;
    this.disabledLogin = false;
  }

}
