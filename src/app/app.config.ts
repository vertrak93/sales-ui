import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SideNavService } from './shared/services/side-nav.service';
import { AuthService } from './shared/api/services';
import { LoginService } from './shared/services/login.service';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideAnimationsAsync(),
    provideHttpClient(),
    SideNavService,
    AuthService,
    LoginService
  ]
};
