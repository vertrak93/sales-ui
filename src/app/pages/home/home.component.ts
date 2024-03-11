import { Component } from '@angular/core';
import { PageHeaderComponent } from "../../shared/components/common/page-header/page-header.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [PageHeaderComponent]
})
export class HomeComponent {

}
