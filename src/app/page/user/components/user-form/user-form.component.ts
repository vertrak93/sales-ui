import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

import { UserDto } from '../../../../shared/api/models';
import { UserService } from '../../../../shared/api/services';

import { Alerts } from '../../../../shared/utils/alerts';

@Component({
    selector: 'app-user-form',
    standalone: true,
    templateUrl: './user-form.component.html',
    styleUrl: './user-form.component.scss',
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatFormFieldModule,
        MatCardModule
    ]
})
export class UserFormComponent {

  private userSrv: UserService = inject(UserService);
  private formBuilder: FormBuilder = inject(FormBuilder);
  private alert: Alerts = inject(Alerts);
  private router: Router = inject(Router);

  user!:UserDto;
  userForm = this.initializeForm();

  constructor(){
    const state = this.router.getCurrentNavigation()?.extras.state;
    if(state){
      this.userForm.reset(state);
      this.userForm.controls.username.disable();
      this.userForm.controls.password.disable();
    }
  }

  ngAfterContentInit(): void {
  }

  initializeForm(){
    return this.formBuilder.group({
      userId: [0],
      username: ['', [Validators.required, Validators.maxLength(50)]],
      fisrtName: ['', [Validators.required, Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.maxLength(50), Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(50)]],
    });
  }

  submitForm(){
    if(this.userForm.valid){
      const data = this.userForm.getRawValue() as UserDto;
      this.handlerSubmin(data);
    }
    else{
      this.userForm.markAllAsTouched();
    }
  }

  cancel(){
    this.router.navigate(['user']);
  }

  postUser(data:any){
    this.userSrv.apiUserPost$Json({body:data}).subscribe({
      next: (res) =>{
        this.alert.Toast(res.message!, 'success');
        this.handlerAfterPost();
      },
      complete: () => {

      }
    })
  }

  patchUser(data:any){
    this.userSrv.apiUserPatch$Json({body:data}).subscribe({
      next: (res) =>{
        this.alert.Toast(res.message!, 'success');
        this.handlerAfterPost();
      },
      complete: () => {

      }
    })
  }

  handlerAfterPost(){
    this.router.navigate(['user']);
  }

  handlerSubmin(data:UserDto){

    if(data.userId == 0){
      this.postUser(data)
    }
    if(data.userId! > 0){
      this.patchUser(data);
    }

  }
}
