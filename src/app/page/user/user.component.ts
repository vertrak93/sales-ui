import { Component, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { UserTableComponent } from "./components/user-table/user-table.component";
import { UserFormComponent } from "./components/user-form/user-form.component";
import { actionOutput } from '../../shared/interfaces/action-output';
import { UserHeaderComponent } from "./components/user-header/user-header.component";

@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.scss',
    imports: [
        MatIconModule,
        UserTableComponent,
        UserFormComponent,
        UserHeaderComponent
    ]
})
export class UserComponent {
}
