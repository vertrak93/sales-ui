import { Component } from '@angular/core';
import { UserFormComponent } from '../components/user-form/user-form.component';
import { PageHeaderComponent } from "../../../shared/components/common/page-header/page-header.component";

@Component({
    selector: 'app-user-add',
    standalone: true,
    templateUrl: './user-add.component.html',
    styleUrl: './user-add.component.scss',
    imports: [UserFormComponent, PageHeaderComponent]
})
export class UserAddComponent {
}
