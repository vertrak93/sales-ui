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

import { PresentationService } from '../../../../../shared/api/services';
import { PresentationDto } from '../../../../../shared/api/models';

import { finalize, map, takeUntil } from 'rxjs';
import { AutoDestroyService } from '../../../../../shared/services/utils/auto-destroy.service';
import { Alerts } from '../../../../../shared/utils/alerts';
import { FilterTableComponent } from "../../../../../shared/components/common/filter-table/filter-table.component";


@Component({
  selector: 'app-presentation-table',
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
  templateUrl: './presentation-table.component.html',
  styleUrl: './presentation-table.component.scss'
})
export class PresentationTableComponent {

  private presentationSrv: PresentationService = inject(PresentationService);
  private dialog: MatDialog = inject(MatDialog);
  private roter: Router = inject(Router);
  private destroy$: AutoDestroyService = inject(AutoDestroyService);
  private alerts: Alerts = inject(Alerts);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  displayedColumns: string[] = ['number', 'presentation', 'options'];
  page = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5,10,50,100]
  categoriesLength = 0;
  $presentations: WritableSignal<PresentationDto[]> = signal([]);
  isLoadingResults = true;
  hasAnyData = false;
  filter ='';

  ngAfterViewInit(){
    this.onPaginator();
    this.getPresentations();
  }

  onPaginator(){
    this.paginator.page.pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.getPresentations();
    });
  }

  edit(item:PresentationDto){
    this.roter.navigate(['presentation','edit'], { state: item });
  }

  delete(item:PresentationDto){
    this.alerts.ConfirmAlert('¿Esta seguro que desea eliminar la presentación?', 'question', ()=>this.onDeleted(item) );
  }

  onDeleted(item:PresentationDto){
    this.presentationSrv.apiPresentationIdDelete$Json( {id: item.presentationId!} ).pipe(
      takeUntil(this.destroy$)
    ).subscribe( () =>{
      this.alerts.Toast('Marca eliminada.','success');
      this.getPresentations();
    });
  }

  getPresentations(){
    this.isLoadingResults = true;
    this.presentationSrv.apiPresentationGet$Json( { Page: this.paginator.pageIndex + 1, PageSize: this.pageSize, Filter: this.filter })
    .pipe(
      map((response) => { return { lenth: response.total as number, brands: response.data as PresentationDto[] } }), 
      finalize(() => this.handleTableRespose()),
      takeUntil(this.destroy$)
    ).subscribe((response)=>{
      this.categoriesLength = response.lenth;
      this.$presentations.set(response.brands);
    });
    
  }

  handleTableRespose(){
    this.isLoadingResults = false;
    this.hasAnyData = this.$presentations().length === 0;
  }

  handleEventFilter(filter:string){
    this.filter = filter;
    this.getPresentations();
  }

}
