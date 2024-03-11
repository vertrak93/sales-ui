import { Component, ViewChild, WritableSignal, inject, signal } from '@angular/core';
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

import { CategoryService } from '../../../../../shared/api/services';
import { CategoryDto } from '../../../../../shared/api/models';

import { finalize, map, takeUntil } from 'rxjs';
import { AutoDestroyService } from '../../../../../shared/services/utils/auto-destroy.service';
import { Alerts } from '../../../../../shared/utils/alerts';
import { FilterTableComponent } from "../../../../../shared/components/common/filter-table/filter-table.component";

@Component({
  selector: 'app-category-table',
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
        MatButtonModule,
        FilterTableComponent
  ],
  providers: [
    AutoDestroyService
],
  templateUrl: './category-table.component.html',
  styleUrl: './category-table.component.scss'
})
export class CategoryTableComponent {

  private categorySrv: CategoryService = inject(CategoryService);
  private dialog: MatDialog = inject(MatDialog);
  private roter: Router = inject(Router);
  private destroy$: AutoDestroyService = inject(AutoDestroyService);
  private alerts: Alerts = inject(Alerts);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  displayedColumns: string[] = ['number', 'category', 'options'];
  page = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5,10,50,100]
  categoriesLength = 0;
  $categories: WritableSignal<CategoryDto[]> = signal([]);
  isLoadingResults = true;
  hasAnyData = false;
  filter ='';

  ngAfterViewInit(){
    this.onPaginator();
    this.getCategories();
  }

  onPaginator(){
    this.paginator.page.pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.getCategories();
    });
  }

  edit(item:CategoryDto){
    this.roter.navigate(['category','edit'], { state: item });
  }

  delete(item:CategoryDto){
    this.alerts.ConfirmAlert('¿Esta seguro que desea eliminar la categoría?', 'question', ()=>this.onDeleted(item) );
  }

  onDeleted(item:CategoryDto){
    this.categorySrv.apiCategoryIdDelete$Json( {id: item.categoryId!} ).pipe(
      takeUntil(this.destroy$)
    ).subscribe( () =>{
      this.alerts.Toast('Marca eliminada.','success');
      this.getCategories();
    });
  }

  getCategories(){
    this.isLoadingResults = true;
    this.categorySrv.apiCategoryGet$Json( { Page: this.paginator.pageIndex + 1, PageSize: this.pageSize, Filter: this.filter })
    .pipe(
      map((response) => { return { lenth: response.total as number, brands: response.data as CategoryDto[] } }), 
      finalize(() => this.handleTableRespose()),
      takeUntil(this.destroy$)
    ).subscribe((response)=>{
      this.categoriesLength = response.lenth;
      this.$categories.set(response.brands);
    });
    
  }

  handleTableRespose(){
    this.isLoadingResults = false;
    this.hasAnyData = this.$categories().length === 0;
  }

  handleEventFilter(filter:string){
    this.filter = filter;
    this.getCategories();
  }

}
