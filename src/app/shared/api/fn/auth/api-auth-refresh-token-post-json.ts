/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiResponseDto } from '../../models/api-response-dto';
import { TokenDto } from '../../models/token-dto';

export interface ApiAuthRefreshTokenPost$Json$Params {
      body?: TokenDto
}

export function apiAuthRefreshTokenPost$Json(http: HttpClient, rootUrl: string, params?: ApiAuthRefreshTokenPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
  const rb = new RequestBuilder(rootUrl, apiAuthRefreshTokenPost$Json.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiResponseDto>;
    })
  );
}

apiAuthRefreshTokenPost$Json.PATH = '/api/auth/refresh-token';
