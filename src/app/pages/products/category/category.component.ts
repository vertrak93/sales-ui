import { Component } from '@angular/core';
import { PageHeaderComponent } from "../../../shared/components/common/page-header/page-header.component";
import { CategoryTableComponent } from "./components/category-table/category-table.component";

@Component({
    selector: 'app-category',
    standalone: true,
    templateUrl: './category.component.html',
    styleUrl: './category.component.scss',
    imports: [PageHeaderComponent, CategoryTableComponent]
})
export class CategoryComponent {

}
