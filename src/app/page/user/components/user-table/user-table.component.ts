import { Component, ElementRef, ViewChild, WritableSignal, inject, signal } from '@angular/core';
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

import { ChangePasswordComponent } from '../change-password/change-password.component';
import { UserRoleComponent } from '../user-role/user-role.component';
import { Observable, Subject, Subscription, debounceTime, delay, exhaustMap, finalize, fromEvent, map, switchMap, takeUntil, tap } from 'rxjs';
import { AutoDestroyService } from '../../../../shared/services/utils/auto-destroy.service';
import { Alerts } from '../../../../shared/utils/alerts';

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
  providers: [
    AutoDestroyService
  ],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.scss'
})
export class UserTableComponent {

  private userSrv: UserService = inject(UserService);
  private dialog: MatDialog = inject(MatDialog);
  private roter: Router = inject(Router);
  private destroy$: AutoDestroyService = inject(AutoDestroyService);
  private alerts: Alerts = inject(Alerts);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  displayedColumns: string[] = ['number', 'username', 'fisrtName', 'lastName', 'email', 'active', 'options'];
  page = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5,10,50,100]
  usersLength = 0;
  $users: WritableSignal<UserDto[]> = signal([]);
  isLoadingResults = true;
  isRateLimitReached = false;
  filterTimeOut:any = null;
  filterChange$!:Observable<InputEvent>; 
  filter ='';
  filtered$: Subject<void> = new Subject();

  ngAfterViewInit(){
    this.onPaginator();
    this.onChangeFilter();
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

  changeState(state:boolean, id:number){
    if(state){ this.inactivateUser(id); }
    else if(!state){ this.activateUser(id); }
  }

  onPaginator(){
    this.paginator.page.pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.getUsers();
    });
  }

  onChangeFilter(){
    this.filtered$.pipe(
      debounceTime(250),      
      takeUntil(this.destroy$),
    ).subscribe( () => this.getUsers());
  }

  getUsers(){
    this.isLoadingResults = true;
    this.userSrv.apiUserGet$Json( { Page: this.paginator.pageIndex + 1, PageSize: this.pageSize, Filter: this.filter })
    .pipe(
      map((response) => { return { lenth: response.total as number, users: response.data as UserDto[] } }), 
      finalize(() => this.handleTableRespose()),
      takeUntil(this.destroy$)
    ).subscribe((response)=>{
      this.usersLength = response.lenth;
      this.$users.set(response.users);
    });
  }

  activateUser(userId:number){
    this.userSrv.apiUserActiveIdPatch$Json( {id: userId} ).pipe(
      takeUntil(this.destroy$)
    ).subscribe( () =>{
      this.alerts.Toast('Usuario activado.','success');
      this.getUsers();
    });
  }

  inactivateUser(userId:number){
    this.userSrv.apiUserIdDelete$Json( {id: userId} ).pipe(
      takeUntil(this.destroy$)
    ).subscribe( () =>{
      this.alerts.Toast('Usuario desactivado.','success');
      this.getUsers();
    });
  }

  handleTableRespose(){
    this.isLoadingResults = false;
    this.isRateLimitReached = this.$users().length === 0;
  }
}
