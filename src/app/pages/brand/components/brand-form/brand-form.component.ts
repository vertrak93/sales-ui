import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

import { ApiResponseDto, BrandDto, UserDto } from '../../../../shared/api/models';
import { BrandService, UserService } from '../../../../shared/api/services';

import { Alerts } from '../../../../shared/utils/alerts';
import { nameRegex, passwordRegex, userRegex } from '../../../../shared/utils/regex';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { EMPTY, Observable, Subject, catchError, delay, exhaustMap, filter, finalize, iif, map, takeUntil, tap } from 'rxjs';
import { AutoDestroyService } from '../../../../shared/services/utils/auto-destroy.service';

@Component({
  selector: 'app-brand-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatProgressSpinner
  ],
  templateUrl: './brand-form.component.html',
  styleUrl: './brand-form.component.scss',
  providers: [ AutoDestroyService ],
})
export class BrandFormComponent {

  private brandSrv: BrandService = inject(BrandService);
  private formBuilder: FormBuilder = inject(FormBuilder);
  private alert: Alerts = inject(Alerts);
  private router: Router = inject(Router);
  private destroy$: AutoDestroyService = inject(AutoDestroyService);

  brandForm = this.initializeForm();
  submitted$: Subject<void> = new Subject();
  disabledSubmit = false;

  constructor(){
    const state = this.router.getCurrentNavigation()?.extras.state;
    if(state){
      this.brandForm.reset(state);
    }
  }

  ngAfterContentInit(): void {
    this.onSubmit();
  }

  initializeForm(){
    return this.formBuilder.group({
      brandId: [0],
      brandName: ['', [Validators.required, Validators.maxLength(100)]]
    });
  }

  onSubmit(){
    this.submitted$.pipe(
      filter(()=> this.brandForm.valid ),
      tap(()=> this.disabledSubmit = true),
      map(() => this.brandForm.getRawValue() as BrandDto),
      exhaustMap( (brand)=> this.handleSubmit(brand)),
      takeUntil(this.destroy$)
    ).subscribe(()=> this.backBrand())
  }

  handleSubmit(data:BrandDto){
    const post$ = this.brandSrv.apiBrandPost$Json({body:data})
                  .pipe(
                    tap((res)=> this.alert.Toast(res.message!, 'success')),
                    finalize(()=> this.disabledSubmit = false),
                    catchError(()=> EMPTY)
                  );

    const patch$ = this.brandSrv.apiBrandPatch$Json({body:data})
                  .pipe(
                    tap((res)=> this.alert.Toast(res.message!, 'success')),
                    finalize(()=> this.disabledSubmit = false),
                    catchError(()=> EMPTY)
                  );
                  
    return iif( ()=>data.brandId == 0, post$, patch$);
  }

  backBrand(){
    this.router.navigate(['brand']);
  }

}
