import { Component } from '@angular/core';
import { PageHeaderComponent } from "../../../shared/components/common/page-header/page-header.component";
import { PresentationTableComponent } from "./components/presentation-table/presentation-table.component";

@Component({
    selector: 'app-presentation',
    standalone: true,
    templateUrl: './presentation.component.html',
    styleUrl: './presentation.component.scss',
    imports: [PageHeaderComponent, PresentationTableComponent]
})
export class PresentationComponent {

}
