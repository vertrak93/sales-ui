/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiResponseDto } from '../../models/api-response-dto';

export interface ApiSubcategoryGet$Json$Params {
  Page?: number;
  PageSize?: number;
  Filter?: string;
  DateStart?: string;
  DateEnd?: string;
}

export function apiSubcategoryGet$Json(http: HttpClient, rootUrl: string, params?: ApiSubcategoryGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
  const rb = new RequestBuilder(rootUrl, apiSubcategoryGet$Json.PATH, 'get');
  if (params) {
    rb.query('Page', params.Page, {});
    rb.query('PageSize', params.PageSize, {});
    rb.query('Filter', params.Filter, {});
    rb.query('DateStart', params.DateStart, {});
    rb.query('DateEnd', params.DateEnd, {});
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

apiSubcategoryGet$Json.PATH = '/api/subcategory';
