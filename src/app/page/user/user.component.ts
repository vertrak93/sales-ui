import { Component, ViewChild, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common'
import {FormsModule} from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import { UserDto } from '../../shared/api/models';
import { UserService } from '../../shared/api/services';
import { catchError, map, of, startWith } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatProgressSpinnerModule, 
    MatTableModule, 
    MatPaginatorModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  private userSrv: UserService = inject(UserService);

  filter = '';
  
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

  ngAfterViewInit(){
    this.paginator.page.subscribe( () => {
      this.getUsers();
    });
    this.getUsers();
  }

  onKeyUp(){

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
        complete: () =>{
          this.isLoadingResults = false;
          this.isRateLimitReached = this.data.length === 0;
        }
      });
  }

}
