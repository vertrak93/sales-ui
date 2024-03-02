import { Component, ViewChild, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { UserService } from '../../../../shared/api/services';
import { UserDto } from '../../../../shared/api/models';

import { Alerts } from '../../../../shared/utils/alerts';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { state } from '@angular/animations';
import { UserRoleComponent } from '../user-role/user-role.component';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [
    MatIconModule,
    MatProgressSpinnerModule, 
    MatTableModule, 
    MatPaginatorModule,
    MatMenuModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.scss'
})
export class UserTableComponent {

  private userSrv: UserService = inject(UserService);
  private alert: Alerts = inject(Alerts);
  private dialog: MatDialog = inject(MatDialog);
  private roter: Router = inject(Router);

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

  ngAfterViewInit(){
    this.paginator.page.subscribe( () => {
      this.getUsers();
    });
    this.getUsers();
  }

  changePassword(item:UserDto){
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      data: item,
      disableClose: true
    });
  }

  roles(item:UserDto){
    const dialogRef = this.dialog.open(UserRoleComponent, {
      data: item,
      disableClose: true
    });
  }

  add(){
    this.roter.navigate(['user/add']);
  }

  edit(item:UserDto){
    console.log('send:',item)
    this.roter.navigate(['user/edit'], { state: item });
  }

  disable(item:UserDto){
  }

  onChangeFilter(){
    clearTimeout(this.filterTimeOut);
    this.filterTimeOut = setTimeout( () => {
      this.getUsers();
    }, 250);
  }

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

}
