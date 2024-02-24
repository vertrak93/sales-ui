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
import { apiUserChangePasswordPut$Json } from '../fn/user/api-user-change-password-put-json';
import { ApiUserChangePasswordPut$Json$Params } from '../fn/user/api-user-change-password-put-json';
import { apiUserChangePasswordPut$Plain } from '../fn/user/api-user-change-password-put-plain';
import { ApiUserChangePasswordPut$Plain$Params } from '../fn/user/api-user-change-password-put-plain';
import { apiUserGet$Json } from '../fn/user/api-user-get-json';
import { ApiUserGet$Json$Params } from '../fn/user/api-user-get-json';
import { apiUserGet$Plain } from '../fn/user/api-user-get-plain';
import { ApiUserGet$Plain$Params } from '../fn/user/api-user-get-plain';
import { apiUserIdDelete$Json } from '../fn/user/api-user-id-delete-json';
import { ApiUserIdDelete$Json$Params } from '../fn/user/api-user-id-delete-json';
import { apiUserIdDelete$Plain } from '../fn/user/api-user-id-delete-plain';
import { ApiUserIdDelete$Plain$Params } from '../fn/user/api-user-id-delete-plain';
import { apiUserPatch$Json } from '../fn/user/api-user-patch-json';
import { ApiUserPatch$Json$Params } from '../fn/user/api-user-patch-json';
import { apiUserPatch$Plain } from '../fn/user/api-user-patch-plain';
import { ApiUserPatch$Plain$Params } from '../fn/user/api-user-patch-plain';
import { apiUserPost$Json } from '../fn/user/api-user-post-json';
import { ApiUserPost$Json$Params } from '../fn/user/api-user-post-json';
import { apiUserPost$Plain } from '../fn/user/api-user-post-plain';
import { ApiUserPost$Plain$Params } from '../fn/user/api-user-post-plain';

@Injectable({ providedIn: 'root' })
export class UserService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiUserGet()` */
  static readonly ApiUserGetPath = '/api/user';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGet$Plain$Response(params?: ApiUserGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiUserGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGet$Plain(params?: ApiUserGet$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiUserGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGet$Json$Response(params?: ApiUserGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiUserGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGet$Json(params?: ApiUserGet$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiUserGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /** Path part for operation `apiUserPost()` */
  static readonly ApiUserPostPath = '/api/user';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserPost$Plain$Response(params?: ApiUserPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiUserPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserPost$Plain(params?: ApiUserPost$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiUserPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserPost$Json$Response(params?: ApiUserPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiUserPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserPost$Json(params?: ApiUserPost$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiUserPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /** Path part for operation `apiUserPatch()` */
  static readonly ApiUserPatchPath = '/api/user';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserPatch$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserPatch$Plain$Response(params?: ApiUserPatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiUserPatch$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserPatch$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserPatch$Plain(params?: ApiUserPatch$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiUserPatch$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserPatch$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserPatch$Json$Response(params?: ApiUserPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiUserPatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserPatch$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserPatch$Json(params?: ApiUserPatch$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiUserPatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /** Path part for operation `apiUserIdDelete()` */
  static readonly ApiUserIdDeletePath = '/api/user/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserIdDelete$Plain$Response(params: ApiUserIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiUserIdDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserIdDelete$Plain(params: ApiUserIdDelete$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiUserIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserIdDelete$Json$Response(params: ApiUserIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiUserIdDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserIdDelete$Json(params: ApiUserIdDelete$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiUserIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /** Path part for operation `apiUserChangePasswordPut()` */
  static readonly ApiUserChangePasswordPutPath = '/api/user/change-password';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserChangePasswordPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserChangePasswordPut$Plain$Response(params?: ApiUserChangePasswordPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiUserChangePasswordPut$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserChangePasswordPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserChangePasswordPut$Plain(params?: ApiUserChangePasswordPut$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiUserChangePasswordPut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserChangePasswordPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserChangePasswordPut$Json$Response(params?: ApiUserChangePasswordPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiUserChangePasswordPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserChangePasswordPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserChangePasswordPut$Json(params?: ApiUserChangePasswordPut$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiUserChangePasswordPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

}
