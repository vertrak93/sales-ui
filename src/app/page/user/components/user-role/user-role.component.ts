import { Component, Inject, ViewChild, inject } from '@angular/core';

import { JsonPipe } from '@angular/common';

import {
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { UserDto, UserRoleDto } from '../../../../shared/api/models';
import { UserRoleService } from '../../../../shared/api/services';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { Alerts } from '../../../../shared/utils/alerts';

@Component({
  selector: 'app-user-role',
  standalone: true,
  imports: [
    MatButtonModule,
    MatProgressSpinner,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatTableModule,
    MatPaginator,
    MatCheckboxModule
  ],
  templateUrl: './user-role.component.html',
  styleUrl: './user-role.component.scss'
})
export class UserRoleComponent {


  private userRolSrv: UserRoleService = inject(UserRoleService)
  private alert: Alerts = inject(Alerts);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor(
    public dialogRef: MatDialogRef<UserRoleComponent>,
    @Inject(MAT_DIALOG_DATA) public user: UserDto
  ) {}

  data: UserRoleDto[] = [];
  displayedColumns: string[] = ['number', 'roleName', 'userId'];
  page = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [10,50,100]
  dataLength = 0;
  isLoadingResults = true;
  isEmptyData = false;
  disableCheckBox = false;

  ngAfterViewInit(){
    this.paginator.page.subscribe( () => {
      this.getUserRole();
    });
    this.getUserRole();
  }

  getUserRole(){
    this.isLoadingResults = true;
    this.userRolSrv.apiUserRoleUseridGet$Json( { userid: this.user.userId!, Page: this.paginator.pageIndex + 1, PageSize: this.pageSize })
      .subscribe({
        next: (resp) => {
          this.data = resp.data as UserDto[];
        },
        error: () =>{
          this.isLoadingResults = false;
          this.isEmptyData = true;
        },
        complete: () =>{
          this.isLoadingResults = false;
          this.isEmptyData = this.data.length === 0;
        }
      });
  }

  changeCheck(e:any, item:UserRoleDto){

    if(e.checked){
      this.postUserRole(item);
    }
    else{
      this.deleteUserRole(item);
    }

  }

  postUserRole(data:UserRoleDto){
    this.disableCheckBox = true;
    data.userId = this.user.userId;
    this.userRolSrv.apiUserRolePost$Json( { body: data } )
      .subscribe({
        next: (res) =>{
          this.alert.Toast('Rol asignado.','success');
          this.getUserRole();
        },
        error: () => {
          this.disableCheckBox = false;
          this.getUserRole();
        },
        complete: () => {
          this.disableCheckBox = false;
        }
      })
  }

  deleteUserRole(data:UserRoleDto){
    this.disableCheckBox = true;
    this.userRolSrv.apiUserRoleIdDelete$Json({ id: data.userRoleId! })
      .subscribe({
        next: (res) => {
          this.alert.Toast('Rol desasignado.','success');
          this.getUserRole();
        },
        error: () => {
          this.disableCheckBox = false;
          this.getUserRole();
        },
        complete: () => {
          this.disableCheckBox = false;
        }
      });
  }

}
