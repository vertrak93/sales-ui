import { Component } from '@angular/core';
import { UserHeaderComponent } from "../components/user-header/user-header.component";
import { UserFormComponent } from '../components/user-form/user-form.component';

@Component({
    selector: 'app-user-add',
    standalone: true,
    templateUrl: './user-add.component.html',
    styleUrl: './user-add.component.scss',
    imports: [UserHeaderComponent, UserFormComponent]
})
export class UserAddComponent {

}
