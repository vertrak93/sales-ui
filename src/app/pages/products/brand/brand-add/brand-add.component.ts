import { Component } from '@angular/core';
import { PageHeaderComponent } from "../../../../shared/components/common/page-header/page-header.component";
import { BrandFormComponent } from "../components/brand-form/brand-form.component";

@Component({
    selector: 'app-brand-add',
    standalone: true,
    templateUrl: './brand-add.component.html',
    styleUrl: './brand-add.component.scss',
    imports: [PageHeaderComponent, BrandFormComponent]
})
export class BrandAddComponent {

}
