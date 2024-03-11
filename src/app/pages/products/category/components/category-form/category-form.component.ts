import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

import { CategoryService } from '../../../../../shared/api/services';

import { Alerts } from '../../../../../shared/utils/alerts';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { EMPTY, Subject, catchError, exhaustMap, filter, finalize, iif, map, takeUntil, tap } from 'rxjs';
import { AutoDestroyService } from '../../../../../shared/services/utils/auto-destroy.service';
import { CategoryDto } from '../../../../../shared/api/models';

@Component({
    selector: 'app-category-form',
    standalone: true,
    providers: [AutoDestroyService],
    templateUrl: './category-form.component.html',
    styleUrl: './category-form.component.scss',
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatFormFieldModule,
        MatCardModule,
        MatProgressSpinner
    ]
})
export class CategoryFormComponent {

  private categorySrv: CategoryService = inject(CategoryService);
  private formBuilder: FormBuilder = inject(FormBuilder);
  private alert: Alerts = inject(Alerts);
  private router: Router = inject(Router);
  private destroy$: AutoDestroyService = inject(AutoDestroyService);

  categoryForm = this.initializeForm();
  submitted$: Subject<void> = new Subject();
  disabledSubmit = false;

  constructor(){
    const state = this.router.getCurrentNavigation()?.extras.state;
    if(state){
      this.categoryForm.reset(state);
    }
  }

  ngAfterContentInit(): void {
    this.onSubmit();
  }

  initializeForm(){
    return this.formBuilder.group({
      categoryId: [0],
      categoryName: ['', [Validators.required, Validators.maxLength(100)]]
    });
  }

  onSubmit(){
    this.submitted$.pipe(
      filter(()=> this.categoryForm.valid ),
      tap(()=> this.disabledSubmit = true),
      map(() => this.categoryForm.getRawValue() as CategoryDto),
      exhaustMap( (brand)=> this.handleSubmit(brand)),
      takeUntil(this.destroy$)
    ).subscribe(()=> this.back())
  }

  handleSubmit(data:CategoryDto){
    const post$ = this.categorySrv.apiCategoryPost$Json({body:data})
                  .pipe(
                    tap((res)=> this.alert.Toast(res.message!, 'success')),
                    finalize(()=> this.disabledSubmit = false),
                    catchError(()=> EMPTY)
                  );

    const patch$ = this.categorySrv.apiCategoryPatch$Json({body:data})
                  .pipe(
                    tap((res)=> this.alert.Toast(res.message!, 'success')),
                    finalize(()=> this.disabledSubmit = false),
                    catchError(()=> EMPTY)
                  );
                  
    return iif( ()=>data.categoryId == 0, post$, patch$);
  }

  back(){
    this.router.navigate(['category']);
  }

}
