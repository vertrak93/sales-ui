import { Component, Inject, ViewChild, WritableSignal, inject, signal } from '@angular/core';

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
import { finalize, map, pipe, takeUntil, tap } from 'rxjs';
import { AutoDestroyService } from '../../../../shared/services/utils/auto-destroy.service';

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
  providers: [
    AutoDestroyService
  ],
  templateUrl: './user-role.component.html',
  styleUrl: './user-role.component.scss'
})
export class UserRoleComponent {

  private userRolSrv: UserRoleService = inject(UserRoleService)
  private alert: Alerts = inject(Alerts);
  private destroy$: AutoDestroyService = inject(AutoDestroyService);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor(
    public dialogRef: MatDialogRef<UserRoleComponent>,
    @Inject(MAT_DIALOG_DATA) public user: UserDto
  ) {}

  $userRoles: WritableSignal<UserRoleDto[]> = signal([]);
  displayedColumns: string[] = ['number', 'roleName', 'userId'];
  page = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [10,50,100]
  userRolesLength = 0;
  isLoadingResults = true;
  isEmptyData = false;
  disableCheckBox = false;

  ngAfterViewInit(){
    this.onPaginator();
    this.getUserRoles();
  }

  onPaginator(){
    this.paginator.page.subscribe( () => {
      this.getUserRoles();
    });
  }

  getUserRoles(){
    this.isLoadingResults = true;
    this.userRolSrv.apiUserRoleUseridGet$Json( { userid: this.user.userId!, Page: this.paginator.pageIndex + 1, PageSize: this.pageSize })
    .pipe(
      map( (response) => { return { length: response.total as number, userRoles: response.data as UserRoleDto[] } }),
      finalize(()=> this.handleTableRespose()),
      takeUntil(this.destroy$)
    ).subscribe((userRoles) => {
      this.userRolesLength = userRoles.length;
      this.$userRoles.set(userRoles.userRoles)
    });
  }

  handleTableRespose(){
    this.isLoadingResults = false;
    this.isEmptyData = this.$userRoles().length === 0;
  }

  onChangeCheck(e:any, item:UserRoleDto){
    if(e.checked){ this.postUserRole(item); }
    else{ this.deleteUserRole(item); }
  }

  postUserRole(data:UserRoleDto){
    this.disableCheckBox = true;
    data.userId = this.user.userId;

    this.userRolSrv.apiUserRolePost$Json( { body: data } )
    .pipe(
      takeUntil(this.destroy$),
      finalize(()=> this.disableCheckBox = false)
    ).subscribe(()=>{
      this.alert.Toast('Rol asignado.','success');
      this.getUserRoles();
    });
  }

  deleteUserRole(data:UserRoleDto){
    this.disableCheckBox = true;
    this.userRolSrv.apiUserRoleIdDelete$Json({ id: data.userRoleId! })
    .pipe(
      takeUntil(this.destroy$),
      finalize(()=> this.disableCheckBox = false)
    ).subscribe(()=>{
      this.alert.Toast('Rol desasignado.','success');
      this.getUserRoles();
    })
  }

}
