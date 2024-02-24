/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiAuthenticatePost$Json } from '../fn/auth/api-authenticate-post-json';
import { ApiAuthenticatePost$Json$Params } from '../fn/auth/api-authenticate-post-json';
import { apiAuthenticatePost$Plain } from '../fn/auth/api-authenticate-post-plain';
import { ApiAuthenticatePost$Plain$Params } from '../fn/auth/api-authenticate-post-plain';
import { apiAuthenticateRefreshTokenPost$Json } from '../fn/auth/api-authenticate-refresh-token-post-json';
import { ApiAuthenticateRefreshTokenPost$Json$Params } from '../fn/auth/api-authenticate-refresh-token-post-json';
import { apiAuthenticateRefreshTokenPost$Plain } from '../fn/auth/api-authenticate-refresh-token-post-plain';
import { ApiAuthenticateRefreshTokenPost$Plain$Params } from '../fn/auth/api-authenticate-refresh-token-post-plain';
import { ApiResponseDto } from '../models/api-response-dto';

@Injectable({ providedIn: 'root' })
export class AuthService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiAuthenticatePost()` */
  static readonly ApiAuthenticatePostPath = '/api/authenticate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthenticatePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthenticatePost$Plain$Response(params?: ApiAuthenticatePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiAuthenticatePost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthenticatePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthenticatePost$Plain(params?: ApiAuthenticatePost$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiAuthenticatePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthenticatePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthenticatePost$Json$Response(params?: ApiAuthenticatePost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiAuthenticatePost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthenticatePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthenticatePost$Json(params?: ApiAuthenticatePost$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiAuthenticatePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /** Path part for operation `apiAuthenticateRefreshTokenPost()` */
  static readonly ApiAuthenticateRefreshTokenPostPath = '/api/authenticate/refresh-token';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthenticateRefreshTokenPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthenticateRefreshTokenPost$Plain$Response(params?: ApiAuthenticateRefreshTokenPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiAuthenticateRefreshTokenPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthenticateRefreshTokenPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthenticateRefreshTokenPost$Plain(params?: ApiAuthenticateRefreshTokenPost$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiAuthenticateRefreshTokenPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthenticateRefreshTokenPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthenticateRefreshTokenPost$Json$Response(params?: ApiAuthenticateRefreshTokenPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiAuthenticateRefreshTokenPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthenticateRefreshTokenPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthenticateRefreshTokenPost$Json(params?: ApiAuthenticateRefreshTokenPost$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiAuthenticateRefreshTokenPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

}
