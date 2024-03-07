import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

import { ApiResponseDto, UserDto } from '../../../../shared/api/models';
import { UserService } from '../../../../shared/api/services';

import { Alerts } from '../../../../shared/utils/alerts';
import { nameRegex, passwordRegex, userRegex } from '../../../../shared/utils/regex';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { EMPTY, Observable, Subject, catchError, delay, exhaustMap, filter, finalize, iif, map, takeUntil, tap } from 'rxjs';
import { AutoDestroyService } from '../../../../shared/services/utils/auto-destroy.service';

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
        MatCardModule,
        MatProgressSpinner
    ],
    providers: [ AutoDestroyService ],
})
export class UserFormComponent {

  private userSrv: UserService = inject(UserService);
  private formBuilder: FormBuilder = inject(FormBuilder);
  private alert: Alerts = inject(Alerts);
  private router: Router = inject(Router);
  private destroy$: AutoDestroyService = inject(AutoDestroyService);

  userForm = this.initializeForm();
  submitted$: Subject<void> = new Subject();
  disabledSubmit = false;

  constructor(){
    const state = this.router.getCurrentNavigation()?.extras.state;
    if(state){
      this.userForm.reset(state);
      this.userForm.controls.username.disable();
      this.userForm.controls.password.disable();
    }
  }

  ngAfterContentInit(): void {
    this.onSubmit();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  initializeForm(){
    return this.formBuilder.group({
      userId: [0],
      username: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(userRegex)]],
      fisrtName: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(nameRegex)]],
      lastName: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(nameRegex)]],
      email: ['', [Validators.required, Validators.maxLength(50), Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(passwordRegex)]]
    });
  }

  onSubmit(){
    this.submitted$.pipe(
      filter(()=> this.userForm.valid ),
      tap(()=> this.disabledSubmit = true),
      map(() => this.userForm.getRawValue() as UserDto),
      exhaustMap( (user)=> this.handleSubmit(user)),
      takeUntil(this.destroy$)
    ).subscribe(()=> this.handlerAfterSubmit())
  }

  handlerAfterSubmit(){
    this.router.navigate(['user']);
  }

  handleSubmit(data:UserDto){
    const post$ = this.userSrv.apiUserPost$Json({body:data})
                  .pipe(
                    tap((res)=> this.alert.Toast(res.message!, 'success')),
                    finalize(()=> this.disabledSubmit = false),
                    catchError(()=> EMPTY)
                  );

    const patch$ = this.userSrv.apiUserPatch$Json({body:data})
                  .pipe(
                    tap((res)=> this.alert.Toast(res.message!, 'success')),
                    finalize(()=> this.disabledSubmit = false),
                    catchError(()=> EMPTY)
                  );
                  
    return iif( ()=>data.userId == 0, post$, patch$);
  }

  cancel(){
    this.router.navigate(['user']);
  }

}
