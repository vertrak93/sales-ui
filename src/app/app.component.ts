import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/components/layout/header/header.component";
import { SidenavComponent } from './shared/components/layout/sidenav/sidenav.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [  RouterOutlet, 
                HeaderComponent,
                SidenavComponent
              ]
})
export class AppComponent {
  title = 'sales-ui';
}
