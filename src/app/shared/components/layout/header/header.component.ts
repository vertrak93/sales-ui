import { Component, inject } from '@angular/core';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { SideNavService } from '../../../services/side-nav.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  private sideNavSrv = inject(SideNavService);

  username:string = '';

  toggleSideNav(){
    this.sideNavSrv.toggleSideNav();
  }

  logOut(){
  }

}
