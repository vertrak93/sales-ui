import { Component } from '@angular/core';
import { PageHeaderComponent } from "../../shared/components/common/page-header/page-header.component";
import { BrandTableComponent } from "./components/brand-table/brand-table.component";

@Component({
    selector: 'app-brand',
    standalone: true,
    templateUrl: './brand.component.html',
    styleUrl: './brand.component.scss',
    imports: [PageHeaderComponent, BrandTableComponent]
})
export class BrandComponent {

}
