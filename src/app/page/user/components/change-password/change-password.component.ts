import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { UserDto } from '../../../../shared/api/models';
import { UserService } from '../../../../shared/api/services';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { replicatePassword } from '../../../../shared/utils/validators/replicatePassword';
import { Alerts } from '../../../../shared/utils/alerts';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [
    MatIconModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent {

  private userSrv: UserService = inject(UserService);
  private formBuilder: FormBuilder = inject(FormBuilder);
  private alert: Alerts = inject(Alerts);

  constructor(
    public dialogRef: MatDialogRef<ChangePasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserDto
  ) {}

  formChangePassword = this.initializeForm();
  passwordRegex = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-\.]).{8,}$';
  disableSubmit = false;

  value1 = '';
  value2 = '';

  initializeForm(){
    return this.formBuilder.group({
      password: ['', [Validators.required, Validators.pattern(this.passwordRegex)]],
      passwordReply: ['', [Validators.required, Validators.pattern(this.passwordRegex), replicatePassword('password')]],
    });
  }

  submitForm(){
    if(this.formChangePassword.valid){
      const data = {...this.data};
      data.password = this.formChangePassword.controls.password.value;
      this.changePassword(data);
    }
    else{
      this.formChangePassword.markAllAsTouched();
    }
  }

  changePassword(data:any){
    this.disableSubmit = true;
    this.userSrv.apiUserChangePasswordPut$Json( { body: data } ).subscribe({
      next: () =>{
        this.dialogRef.close('done');
        this.alert.Toast('Contraseña cambiada.','success');
      },
      error: () => {
        this.disableSubmit = false;
      },
      complete: () => {
        this.disableSubmit = false;
      }
    })

  }

  validatePassword(){
    console.log(this.formChangePassword.controls.password.valid != this.formChangePassword.controls.passwordReply.valid);
    return this.formChangePassword.controls.password.valid != this.formChangePassword.controls.passwordReply.valid;
  }

}
