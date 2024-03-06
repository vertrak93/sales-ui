import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { CookieService } from 'ngx-cookie-service';

import { SideNavService } from './shared/services/common/side-nav.service';
import { AuthService } from './shared/api/services';
import { LoginService } from './shared/services/common/login.service';
import { ApiInterceptorService, apiInterceptor } from './shared/interceptors/api.interceptor';
import { Alerts } from './shared/utils/alerts';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([apiInterceptor])),
    CookieService,
    SideNavService,
    AuthService,
    LoginService,
    ApiInterceptorService,
    Alerts
  ]
};
