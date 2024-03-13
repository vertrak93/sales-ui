import { Component, Input, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

import { PresentationService } from '../../../../../shared/api/services';

import { Alerts } from '../../../../../shared/utils/alerts';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { EMPTY, Subject, catchError, exhaustMap, filter, finalize, iif, map, takeUntil, tap } from 'rxjs';
import { AutoDestroyService } from '../../../../../shared/services/utils/auto-destroy.service';
import { PresentationDto } from '../../../../../shared/api/models';

@Component({
  selector: 'app-presentation-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatProgressSpinner,
    JsonPipe
  ],
  providers: [
    AutoDestroyService
  ],
  templateUrl: './presentation-form.component.html',
  styleUrl: './presentation-form.component.scss'
})
export class PresentationFormComponent {

  @Input() presentation!: PresentationDto;
  private presentationSrv: PresentationService = inject(PresentationService);
  private formBuilder: FormBuilder = inject(FormBuilder);
  private alert: Alerts = inject(Alerts);
  private router: Router = inject(Router);
  private destroy$: AutoDestroyService = inject(AutoDestroyService);

  categoryForm = this.initializeForm();
  submitted$: Subject<void> = new Subject();
  disabledSubmit = false;

  ngAfterContentInit(): void {
    this.initEditForm();
    this.onSubmit();
  }

  initializeForm(){
    return this.formBuilder.group({
      presentationId: [0],
      presentationName: ['', [Validators.required, Validators.maxLength(100)]]
    });
  }

  onSubmit(){
    this.submitted$.pipe(
      filter(()=> this.categoryForm.valid ),
      tap(()=> this.disabledSubmit = true),
      map(() => this.categoryForm.getRawValue() as PresentationDto),
      exhaustMap( (brand)=> this.handleSubmit(brand)),
      takeUntil(this.destroy$)
    ).subscribe(()=> this.back())
  }

  handleSubmit(data:PresentationDto){
    const post$ = this.presentationSrv.apiPresentationPost$Json({body:data})
                  .pipe(
                    tap((res)=> this.alert.Toast(res.message!, 'success')),
                    finalize(()=> this.disabledSubmit = false),
                    catchError(()=> EMPTY)
                  );

    const patch$ = this.presentationSrv.apiPresentationPatch$Json({body:data})
                  .pipe(
                    tap((res)=> this.alert.Toast(res.message!, 'success')),
                    finalize(()=> this.disabledSubmit = false),
                    catchError(()=> EMPTY)
                  );
                  
    return iif( ()=>data.presentationId == 0, post$, patch$);
  }

  back(){
    this.router.navigate(['presentation']);
  }

  initEditForm(){
    if(this.presentation){
      this.categoryForm.reset(this.presentation);
    }
  }

}
