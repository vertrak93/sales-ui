import { Component, inject } from '@angular/core';
import { MatDrawerMode, MatSidenavModule } from '@angular/material/sidenav';
import { SideNavService } from '../../../services/side-nav.service';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatSidenavModule, NavMenuComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  private sideNaSrv = inject(SideNavService);

  sidenavOpened: boolean = true;
  mode:MatDrawerMode = 'side';

  constructor(){

    this.sideNaSrv.getSideNavOpened().subscribe( value => this.sidenavOpened = value );
    
  }

}
