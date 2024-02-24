/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiBrandGet$Json } from '../fn/brand/api-brand-get-json';
import { ApiBrandGet$Json$Params } from '../fn/brand/api-brand-get-json';
import { apiBrandGet$Plain } from '../fn/brand/api-brand-get-plain';
import { ApiBrandGet$Plain$Params } from '../fn/brand/api-brand-get-plain';
import { apiBrandIdDelete$Json } from '../fn/brand/api-brand-id-delete-json';
import { ApiBrandIdDelete$Json$Params } from '../fn/brand/api-brand-id-delete-json';
import { apiBrandIdDelete$Plain } from '../fn/brand/api-brand-id-delete-plain';
import { ApiBrandIdDelete$Plain$Params } from '../fn/brand/api-brand-id-delete-plain';
import { apiBrandPatch$Json } from '../fn/brand/api-brand-patch-json';
import { ApiBrandPatch$Json$Params } from '../fn/brand/api-brand-patch-json';
import { apiBrandPatch$Plain } from '../fn/brand/api-brand-patch-plain';
import { ApiBrandPatch$Plain$Params } from '../fn/brand/api-brand-patch-plain';
import { apiBrandPost$Json } from '../fn/brand/api-brand-post-json';
import { ApiBrandPost$Json$Params } from '../fn/brand/api-brand-post-json';
import { apiBrandPost$Plain } from '../fn/brand/api-brand-post-plain';
import { ApiBrandPost$Plain$Params } from '../fn/brand/api-brand-post-plain';
import { ApiResponseDto } from '../models/api-response-dto';

@Injectable({ providedIn: 'root' })
export class BrandService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiBrandGet()` */
  static readonly ApiBrandGetPath = '/api/brand';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBrandGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBrandGet$Plain$Response(params?: ApiBrandGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiBrandGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBrandGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBrandGet$Plain(params?: ApiBrandGet$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiBrandGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBrandGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBrandGet$Json$Response(params?: ApiBrandGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiBrandGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBrandGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBrandGet$Json(params?: ApiBrandGet$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiBrandGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /** Path part for operation `apiBrandPost()` */
  static readonly ApiBrandPostPath = '/api/brand';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBrandPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBrandPost$Plain$Response(params?: ApiBrandPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiBrandPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBrandPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBrandPost$Plain(params?: ApiBrandPost$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiBrandPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBrandPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBrandPost$Json$Response(params?: ApiBrandPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiBrandPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBrandPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBrandPost$Json(params?: ApiBrandPost$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiBrandPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /** Path part for operation `apiBrandPatch()` */
  static readonly ApiBrandPatchPath = '/api/brand';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBrandPatch$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBrandPatch$Plain$Response(params?: ApiBrandPatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiBrandPatch$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBrandPatch$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBrandPatch$Plain(params?: ApiBrandPatch$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiBrandPatch$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBrandPatch$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBrandPatch$Json$Response(params?: ApiBrandPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiBrandPatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBrandPatch$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBrandPatch$Json(params?: ApiBrandPatch$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiBrandPatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /** Path part for operation `apiBrandIdDelete()` */
  static readonly ApiBrandIdDeletePath = '/api/brand/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBrandIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBrandIdDelete$Plain$Response(params: ApiBrandIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiBrandIdDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBrandIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBrandIdDelete$Plain(params: ApiBrandIdDelete$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiBrandIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBrandIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBrandIdDelete$Json$Response(params: ApiBrandIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiBrandIdDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBrandIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBrandIdDelete$Json(params: ApiBrandIdDelete$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiBrandIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

}
