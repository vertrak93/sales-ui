import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    FormsModule,

    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  value = '';
}
