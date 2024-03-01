import { Component, ViewChild, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common'
import {FormBuilder, ReactiveFormsModule, FormsModule, Validators} from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';

import { UserDto } from '../../shared/api/models';
import { UserService } from '../../shared/api/services';
import { Alerts } from '../../shared/utils/alerts';
import { MatDialog } from '@angular/material/dialog';
import { ChangePasswordComponent } from './components/change-password/change-password.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatProgressSpinnerModule, 
    MatTableModule, 
    MatPaginatorModule,
    MatMenuModule,
    MatCardModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  private userSrv: UserService = inject(UserService);
  private formBuilder: FormBuilder = inject(FormBuilder);
  private alert: Alerts = inject(Alerts);
  private dialog: MatDialog = inject(MatDialog);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['number', 'username', 'fisrtName', 'lastName', 'email', 'options'];
  page = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5,10,50,100]
  dataLength = 0;
  data: UserDto[] = [];
  isLoadingResults = true;
  isRateLimitReached = false;
  filterTimeOut:any = null;
  filter = '';

  user!:UserDto;
  userForm = this.initializeForm();

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

  ngAfterViewInit(){
    this.paginator.page.subscribe( () => {
      this.getUsers();
    });
    this.getUsers();
  }

  onChangeFilter(){

    clearTimeout(this.filterTimeOut);
    this.filterTimeOut = setTimeout( () => {
      this.getUsers();
    }, 250);

  }

  clickAdd(){
  }

  changePassword(item:UserDto){
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      data: item,
      disableClose: true
    });
  }

  submitForm(){
    if(this.userForm.valid){
      const data = this.userForm.value;
      this.postUser(data);
      this.handlerPostUser();
    }
    else{
      this.userForm.markAllAsTouched();
    }
  }

  cancel(){
    this.userForm = this.initializeForm();
  }

  //#region http methods
  getUsers(){
    this.isLoadingResults = true;
    this.userSrv.apiUserGet$Json( { Page: this.paginator.pageIndex + 1, PageSize: this.pageSize, Filter: this.filter })
      .subscribe({
        next: (resp) => {
          this.data = resp.data as UserDto[];
        },
        error: () =>{
          this.isLoadingResults = false;
          this.isRateLimitReached = true;
        },
        complete: () =>{
          this.isLoadingResults = false;
          this.isRateLimitReached = this.data.length === 0;
        }
      });
  }

  postUser(data:any){
    this.userSrv.apiUserPost$Json({body:data}).subscribe({
      next: (res) =>{
        this.alert.Toast(res.message!, 'success');
      }
    })
  }

  //#endregion

  //#region handlers
  handlerPostUser(){
    this.getUsers();
    this.userForm = this.initializeForm();
  }
  //#endregion


}
