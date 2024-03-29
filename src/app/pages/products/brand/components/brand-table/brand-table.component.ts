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

import { BrandService } from '../../../../../shared/api/services';
import { BrandDto } from '../../../../../shared/api/models';

import { finalize, map, takeUntil } from 'rxjs';
import { AutoDestroyService } from '../../../../../shared/services/utils/auto-destroy.service';
import { Alerts } from '../../../../../shared/utils/alerts';
import { FilterTableComponent } from "../../../../../shared/components/common/filter-table/filter-table.component";

@Component({
    selector: 'app-brand-table',
    standalone: true,
    providers: [
        AutoDestroyService
    ],
    templateUrl: './brand-table.component.html',
    styleUrl: './brand-table.component.scss',
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
    ]
})
export class BrandTableComponent {

  private brandSrv: BrandService = inject(BrandService);
  private dialog: MatDialog = inject(MatDialog);
  private roter: Router = inject(Router);
  private destroy$: AutoDestroyService = inject(AutoDestroyService);
  private alerts: Alerts = inject(Alerts);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  displayedColumns: string[] = ['number', 'brand', 'options'];
  page = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5,10,50,100]
  brandsLength = 0;
  $brands: WritableSignal<BrandDto[]> = signal([]);
  isLoadingResults = true;
  hasAnyBrands = false;
  filter ='';

  ngAfterViewInit(){
    this.onPaginator();
    this.getBrands();
  }

  onPaginator(){
    this.paginator.page.pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.getBrands();
    });
  }

  edit(item:BrandDto){
    this.roter.navigate(['brand','edit'], { state: item });
  }

  delete(item:BrandDto){
    this.alerts.ConfirmAlert('¿Esta sdeguro que desea eliminar la marca?', 'question', ()=>this.onDeleted(item) );
  }

  onDeleted(item:BrandDto){
    this.brandSrv.apiBrandIdDelete$Json( {id: item.brandId!} ).pipe(
      takeUntil(this.destroy$)
    ).subscribe( () =>{
      this.alerts.Toast('Marca eliminada.','success');
      this.getBrands();
    });
  }

  getBrands(){
    this.isLoadingResults = true;
    this.brandSrv.apiBrandGet$Json( { Page: this.paginator.pageIndex + 1, PageSize: this.pageSize, Filter: this.filter })
    .pipe(
      map((response) => { return { lenth: response.total as number, brands: response.data as BrandDto[] } }), 
      finalize(() => this.handleTableRespose()),
      takeUntil(this.destroy$)
    ).subscribe((response)=>{
      this.brandsLength = response.lenth;
      this.$brands.set(response.brands);
    });
    
  }

  handleTableRespose(){
    this.isLoadingResults = false;
    this.hasAnyBrands = this.$brands().length === 0;
  }

  handleEventFilter(filter:string){
    this.filter = filter;
    this.getBrands();
  }
}
