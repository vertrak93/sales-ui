/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiResponseDto } from '../../models/api-response-dto';

export interface ApiUserIdDelete$Plain$Params {
  id: number;
}

export function apiUserIdDelete$Plain(http: HttpClient, rootUrl: string, params: ApiUserIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
  const rb = new RequestBuilder(rootUrl, apiUserIdDelete$Plain.PATH, 'delete');
  if (params) {
    rb.path('id', params.id, {});
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

apiUserIdDelete$Plain.PATH = '/api/user/{id}';
