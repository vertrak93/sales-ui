import { Component } from '@angular/core';
import { PageHeaderComponent } from "../../../../shared/components/common/page-header/page-header.component";
import { CategoryFormComponent } from "../components/category-form/category-form.component";

@Component({
    selector: 'app-category-add',
    standalone: true,
    templateUrl: './category-add.component.html',
    styleUrl: './category-add.component.scss',
    imports: [PageHeaderComponent, CategoryFormComponent]
})
export class CategoryAddComponent {

}
