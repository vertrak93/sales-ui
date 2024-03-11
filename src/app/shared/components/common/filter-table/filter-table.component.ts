import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { Subject, debounceTime, takeUntil } from 'rxjs';
import { AutoDestroyService } from '../../../services/utils/auto-destroy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter-table',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatIconModule,
    FormsModule
  ],
  providers: [
    AutoDestroyService
  ],
  templateUrl: './filter-table.component.html',
  styleUrl: './filter-table.component.scss'
})
export class FilterTableComponent {

  private destroy$: AutoDestroyService = inject(AutoDestroyService);
  private roter: Router = inject(Router);

  @Input() addRoute!: string[];
  @Output() filterEmitter = new EventEmitter<string>();
  filter = '';
  filtered$: Subject<void> = new Subject();

  ngAfterViewInit(){
    this.onChangeFilter();
  }

  onChangeFilter(){
    this.filtered$.pipe(
      debounceTime(250),      
      takeUntil(this.destroy$),
    ).subscribe( () => this.filterEmitter.emit(this.filter));
  }

  add(){
    this.roter.navigate(this.addRoute);
  }
}
