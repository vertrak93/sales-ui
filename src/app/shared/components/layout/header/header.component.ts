import { Component, inject } from '@angular/core';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { SideNavService } from '../../../services/common/side-nav.service';
import { LoginService } from '../../../services/common/login.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  private sideNavSrv = inject(SideNavService);
  private loginSrv = inject(LoginService);

  username:string = '';

  toggleSideNav(){
    this.sideNavSrv.toggleSideNav();
  }

  logOut(){
    this.loginSrv.logOut();
  }

  get session(){
    return this.loginSrv.getUser();
  }

}
