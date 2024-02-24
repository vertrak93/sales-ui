/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiResponseDto } from '../models/api-response-dto';
import { apiUserRoleIdDelete$Json } from '../fn/user-role/api-user-role-id-delete-json';
import { ApiUserRoleIdDelete$Json$Params } from '../fn/user-role/api-user-role-id-delete-json';
import { apiUserRoleIdDelete$Plain } from '../fn/user-role/api-user-role-id-delete-plain';
import { ApiUserRoleIdDelete$Plain$Params } from '../fn/user-role/api-user-role-id-delete-plain';
import { apiUserRolePost$Json } from '../fn/user-role/api-user-role-post-json';
import { ApiUserRolePost$Json$Params } from '../fn/user-role/api-user-role-post-json';
import { apiUserRolePost$Plain } from '../fn/user-role/api-user-role-post-plain';
import { ApiUserRolePost$Plain$Params } from '../fn/user-role/api-user-role-post-plain';
import { apiUserRoleUseridGet$Json } from '../fn/user-role/api-user-role-userid-get-json';
import { ApiUserRoleUseridGet$Json$Params } from '../fn/user-role/api-user-role-userid-get-json';
import { apiUserRoleUseridGet$Plain } from '../fn/user-role/api-user-role-userid-get-plain';
import { ApiUserRoleUseridGet$Plain$Params } from '../fn/user-role/api-user-role-userid-get-plain';

@Injectable({ providedIn: 'root' })
export class UserRoleService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiUserRoleUseridGet()` */
  static readonly ApiUserRoleUseridGetPath = '/api/user/role/{userid}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserRoleUseridGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserRoleUseridGet$Plain$Response(params: ApiUserRoleUseridGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiUserRoleUseridGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserRoleUseridGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserRoleUseridGet$Plain(params: ApiUserRoleUseridGet$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiUserRoleUseridGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserRoleUseridGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserRoleUseridGet$Json$Response(params: ApiUserRoleUseridGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiUserRoleUseridGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserRoleUseridGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserRoleUseridGet$Json(params: ApiUserRoleUseridGet$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiUserRoleUseridGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /** Path part for operation `apiUserRolePost()` */
  static readonly ApiUserRolePostPath = '/api/user/role';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserRolePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserRolePost$Plain$Response(params?: ApiUserRolePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiUserRolePost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserRolePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserRolePost$Plain(params?: ApiUserRolePost$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiUserRolePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserRolePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserRolePost$Json$Response(params?: ApiUserRolePost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiUserRolePost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserRolePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserRolePost$Json(params?: ApiUserRolePost$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiUserRolePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /** Path part for operation `apiUserRoleIdDelete()` */
  static readonly ApiUserRoleIdDeletePath = '/api/user/role/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserRoleIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserRoleIdDelete$Plain$Response(params: ApiUserRoleIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiUserRoleIdDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserRoleIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserRoleIdDelete$Plain(params: ApiUserRoleIdDelete$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiUserRoleIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserRoleIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserRoleIdDelete$Json$Response(params: ApiUserRoleIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiUserRoleIdDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserRoleIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserRoleIdDelete$Json(params: ApiUserRoleIdDelete$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiUserRoleIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

}
