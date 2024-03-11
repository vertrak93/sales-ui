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
import { Subject, exhaustMap, filter, finalize, map, takeUntil, tap } from 'rxjs';
import { passwordRegex } from '../../../../shared/utils/regex';
import { AutoDestroyService } from '../../../../shared/services/utils/auto-destroy.service';

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
  providers: [ AutoDestroyService ],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent {

  private userSrv: UserService = inject(UserService);
  private formBuilder: FormBuilder = inject(FormBuilder);
  private alert: Alerts = inject(Alerts);
  private destroy$: AutoDestroyService = inject(AutoDestroyService);

  submitted$: Subject<void> = new Subject();
  disableSubmit = false;
  constructor(
    public dialogRef: MatDialogRef<ChangePasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserDto
  ) {}

  formChangePassword = this.formBuilder.group({
    password: ['', [Validators.required, Validators.pattern(passwordRegex)]],
    passwordReply: ['', [Validators.required, Validators.pattern(passwordRegex), replicatePassword('password')]],
  });
  
  ngOnInit(): void {
    this.onSubmit();
  }

  onSubmit(){
    this.submitted$.pipe(
      filter(()=> this.formChangePassword.valid),
      tap(() => { 
        this.disableSubmit = true; 
        this.data.password = this.formChangePassword.controls.password.value;
      }),
      map(() => this.data),
      exhaustMap((user) => this.userSrv.apiUserChangePasswordPut$Json( { body: user } )
      .pipe(
        finalize( () => this.disableSubmit = false),
      )),
      takeUntil(this.destroy$)
    ).subscribe( () => {
        this.dialogRef.close('done');
        this.alert.Toast('Contraseña cambiada.','success');
    });
  }

  validatePassword(){
    return this.formChangePassword.controls.password.valid != this.formChangePassword.controls.passwordReply.valid;
  }

}
