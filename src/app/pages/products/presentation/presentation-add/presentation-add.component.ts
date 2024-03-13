import { Component } from '@angular/core';
import { PageHeaderComponent } from "../../../../shared/components/common/page-header/page-header.component";
import { Router } from '@angular/router';
import { PresentationDto } from '../../../../shared/api/models';
import { PresentationFormComponent } from "../components/presentation-form/presentation-form.component";

@Component({
    selector: 'app-presentation-add',
    standalone: true,
    templateUrl: './presentation-add.component.html',
    styleUrl: './presentation-add.component.scss',
    imports: [PageHeaderComponent, PresentationFormComponent]
})
export class PresentationAddComponent {

  presentation!: PresentationDto;
  constructor(private router: Router){
    const state = this.router.getCurrentNavigation()?.extras.state;
    console.log('father:',state);
    if(state){
      this.presentation = state;
    }
  }

}
