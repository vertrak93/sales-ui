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

  submitForm(){
    if(!this.loginForm.invalid){
      
      this.disabledLogin = true;
      const Authenticate: AuthenticateDto = this.loginForm.value;

      this.authSrv.apiAuthenticatePost$Json({body: Authenticate}).subscribe({
        next: (resp) => {
          this.loginSrv.HandleLogin(resp);
        },
        error: (ex) => {
          this.errorText = ex.error?.message ? ex.error.message : ex.message;
          this.errorLogin = true;
          this.disabledLogin = false;
        }
      });

    }
    else{
      this.loginForm.markAllAsTouched();
    }
  }

}
