/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiResponseDto } from '../../models/api-response-dto';
import { AuthenticateDto } from '../../models/authenticate-dto';

export interface ApiAuthLoginPost$Plain$Params {
      body?: AuthenticateDto
}

export function apiAuthLoginPost$Plain(http: HttpClient, rootUrl: string, params?: ApiAuthLoginPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
  const rb = new RequestBuilder(rootUrl, apiAuthLoginPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiResponseDto>;
    })
  );
}

apiAuthLoginPost$Plain.PATH = '/api/auth/login';
