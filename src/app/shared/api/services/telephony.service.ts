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
import { apiTelephonyGet$Json } from '../fn/telephony/api-telephony-get-json';
import { ApiTelephonyGet$Json$Params } from '../fn/telephony/api-telephony-get-json';
import { apiTelephonyGet$Plain } from '../fn/telephony/api-telephony-get-plain';
import { ApiTelephonyGet$Plain$Params } from '../fn/telephony/api-telephony-get-plain';
import { apiTelephonyIdDelete$Json } from '../fn/telephony/api-telephony-id-delete-json';
import { ApiTelephonyIdDelete$Json$Params } from '../fn/telephony/api-telephony-id-delete-json';
import { apiTelephonyIdDelete$Plain } from '../fn/telephony/api-telephony-id-delete-plain';
import { ApiTelephonyIdDelete$Plain$Params } from '../fn/telephony/api-telephony-id-delete-plain';
import { apiTelephonyPatch$Json } from '../fn/telephony/api-telephony-patch-json';
import { ApiTelephonyPatch$Json$Params } from '../fn/telephony/api-telephony-patch-json';
import { apiTelephonyPatch$Plain } from '../fn/telephony/api-telephony-patch-plain';
import { ApiTelephonyPatch$Plain$Params } from '../fn/telephony/api-telephony-patch-plain';
import { apiTelephonyPost$Json } from '../fn/telephony/api-telephony-post-json';
import { ApiTelephonyPost$Json$Params } from '../fn/telephony/api-telephony-post-json';
import { apiTelephonyPost$Plain } from '../fn/telephony/api-telephony-post-plain';
import { ApiTelephonyPost$Plain$Params } from '../fn/telephony/api-telephony-post-plain';

@Injectable({ providedIn: 'root' })
export class TelephonyService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiTelephonyGet()` */
  static readonly ApiTelephonyGetPath = '/api/telephony';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTelephonyGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTelephonyGet$Plain$Response(params?: ApiTelephonyGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiTelephonyGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTelephonyGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTelephonyGet$Plain(params?: ApiTelephonyGet$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiTelephonyGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTelephonyGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTelephonyGet$Json$Response(params?: ApiTelephonyGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiTelephonyGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTelephonyGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTelephonyGet$Json(params?: ApiTelephonyGet$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiTelephonyGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /** Path part for operation `apiTelephonyPost()` */
  static readonly ApiTelephonyPostPath = '/api/telephony';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTelephonyPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTelephonyPost$Plain$Response(params?: ApiTelephonyPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiTelephonyPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTelephonyPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTelephonyPost$Plain(params?: ApiTelephonyPost$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiTelephonyPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTelephonyPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTelephonyPost$Json$Response(params?: ApiTelephonyPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiTelephonyPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTelephonyPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTelephonyPost$Json(params?: ApiTelephonyPost$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiTelephonyPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /** Path part for operation `apiTelephonyPatch()` */
  static readonly ApiTelephonyPatchPath = '/api/telephony';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTelephonyPatch$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTelephonyPatch$Plain$Response(params?: ApiTelephonyPatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiTelephonyPatch$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTelephonyPatch$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTelephonyPatch$Plain(params?: ApiTelephonyPatch$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiTelephonyPatch$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTelephonyPatch$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTelephonyPatch$Json$Response(params?: ApiTelephonyPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiTelephonyPatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTelephonyPatch$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTelephonyPatch$Json(params?: ApiTelephonyPatch$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiTelephonyPatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /** Path part for operation `apiTelephonyIdDelete()` */
  static readonly ApiTelephonyIdDeletePath = '/api/telephony/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTelephonyIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTelephonyIdDelete$Plain$Response(params: ApiTelephonyIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiTelephonyIdDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTelephonyIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTelephonyIdDelete$Plain(params: ApiTelephonyIdDelete$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiTelephonyIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTelephonyIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTelephonyIdDelete$Json$Response(params: ApiTelephonyIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiTelephonyIdDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTelephonyIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTelephonyIdDelete$Json(params: ApiTelephonyIdDelete$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiTelephonyIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

}
