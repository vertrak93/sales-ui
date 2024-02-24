import { Component, inject } from '@angular/core';
import { MatDrawerMode, MatSidenavModule } from '@angular/material/sidenav';
import { SideNavService } from '../../../services/side-nav.service';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { ScreenService } from '../../../services/screen.service';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatSidenavModule, NavMenuComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  private sideNavSrv = inject(SideNavService);
  private screanSrv = inject(ScreenService);

  sidenavOpened: boolean = true;
  mode:MatDrawerMode = 'side';

  constructor(){

    this.sideNavSrv.getSideNavOpened().subscribe( value => this.sidenavOpened = value );
    this.screanSrv.isHandset$.subscribe( (e:boolean) => this.updateSideNav(e) );
    
  }

  updateSideNav(isHandset:boolean){
    this.mode = isHandset ? 'over' : 'side';
    console.log(this.mode);
    this.sideNavSrv.setSideNavOpened(!isHandset);
  }

}
