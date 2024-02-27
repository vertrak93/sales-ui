/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiAuthLoginPost$Json } from '../fn/auth/api-auth-login-post-json';
import { ApiAuthLoginPost$Json$Params } from '../fn/auth/api-auth-login-post-json';
import { apiAuthLoginPost$Plain } from '../fn/auth/api-auth-login-post-plain';
import { ApiAuthLoginPost$Plain$Params } from '../fn/auth/api-auth-login-post-plain';
import { apiAuthRefreshTokenPost$Json } from '../fn/auth/api-auth-refresh-token-post-json';
import { ApiAuthRefreshTokenPost$Json$Params } from '../fn/auth/api-auth-refresh-token-post-json';
import { apiAuthRefreshTokenPost$Plain } from '../fn/auth/api-auth-refresh-token-post-plain';
import { ApiAuthRefreshTokenPost$Plain$Params } from '../fn/auth/api-auth-refresh-token-post-plain';
import { ApiResponseDto } from '../models/api-response-dto';

@Injectable({ providedIn: 'root' })
export class AuthService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiAuthLoginPost()` */
  static readonly ApiAuthLoginPostPath = '/api/auth/login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthLoginPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthLoginPost$Plain$Response(params?: ApiAuthLoginPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiAuthLoginPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthLoginPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthLoginPost$Plain(params?: ApiAuthLoginPost$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiAuthLoginPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthLoginPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthLoginPost$Json$Response(params?: ApiAuthLoginPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiAuthLoginPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthLoginPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthLoginPost$Json(params?: ApiAuthLoginPost$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiAuthLoginPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /** Path part for operation `apiAuthRefreshTokenPost()` */
  static readonly ApiAuthRefreshTokenPostPath = '/api/auth/refresh-token';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthRefreshTokenPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthRefreshTokenPost$Plain$Response(params?: ApiAuthRefreshTokenPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiAuthRefreshTokenPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthRefreshTokenPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthRefreshTokenPost$Plain(params?: ApiAuthRefreshTokenPost$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiAuthRefreshTokenPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthRefreshTokenPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthRefreshTokenPost$Json$Response(params?: ApiAuthRefreshTokenPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiAuthRefreshTokenPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthRefreshTokenPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthRefreshTokenPost$Json(params?: ApiAuthRefreshTokenPost$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiAuthRefreshTokenPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

}
