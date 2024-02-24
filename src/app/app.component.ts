import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/components/layout/header/header.component";
import { SidenavComponent } from './shared/components/layout/sidenav/sidenav.component';
import { LoginService } from './shared/services/login.service';

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

  private loginSrv:LoginService = inject(LoginService);
  title = 'sales-ui';

  ngOnInit(){
  }

  get isLogged(){
    return this.loginSrv.loggedIn;
  }

}
