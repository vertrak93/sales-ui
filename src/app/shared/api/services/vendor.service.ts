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
import { apiVendorGet$Json } from '../fn/vendor/api-vendor-get-json';
import { ApiVendorGet$Json$Params } from '../fn/vendor/api-vendor-get-json';
import { apiVendorGet$Plain } from '../fn/vendor/api-vendor-get-plain';
import { ApiVendorGet$Plain$Params } from '../fn/vendor/api-vendor-get-plain';
import { apiVendorIdDelete$Json } from '../fn/vendor/api-vendor-id-delete-json';
import { ApiVendorIdDelete$Json$Params } from '../fn/vendor/api-vendor-id-delete-json';
import { apiVendorIdDelete$Plain } from '../fn/vendor/api-vendor-id-delete-plain';
import { ApiVendorIdDelete$Plain$Params } from '../fn/vendor/api-vendor-id-delete-plain';
import { apiVendorIdGet$Json } from '../fn/vendor/api-vendor-id-get-json';
import { ApiVendorIdGet$Json$Params } from '../fn/vendor/api-vendor-id-get-json';
import { apiVendorIdGet$Plain } from '../fn/vendor/api-vendor-id-get-plain';
import { ApiVendorIdGet$Plain$Params } from '../fn/vendor/api-vendor-id-get-plain';
import { apiVendorIdProductGet$Json } from '../fn/vendor/api-vendor-id-product-get-json';
import { ApiVendorIdProductGet$Json$Params } from '../fn/vendor/api-vendor-id-product-get-json';
import { apiVendorIdProductGet$Plain } from '../fn/vendor/api-vendor-id-product-get-plain';
import { ApiVendorIdProductGet$Plain$Params } from '../fn/vendor/api-vendor-id-product-get-plain';
import { apiVendorPatch$Json } from '../fn/vendor/api-vendor-patch-json';
import { ApiVendorPatch$Json$Params } from '../fn/vendor/api-vendor-patch-json';
import { apiVendorPatch$Plain } from '../fn/vendor/api-vendor-patch-plain';
import { ApiVendorPatch$Plain$Params } from '../fn/vendor/api-vendor-patch-plain';
import { apiVendorPost$Json } from '../fn/vendor/api-vendor-post-json';
import { ApiVendorPost$Json$Params } from '../fn/vendor/api-vendor-post-json';
import { apiVendorPost$Plain } from '../fn/vendor/api-vendor-post-plain';
import { ApiVendorPost$Plain$Params } from '../fn/vendor/api-vendor-post-plain';

@Injectable({ providedIn: 'root' })
export class VendorService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiVendorGet()` */
  static readonly ApiVendorGetPath = '/api/vendor';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVendorGet$Plain$Response(params?: ApiVendorGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiVendorGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVendorGet$Plain(params?: ApiVendorGet$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiVendorGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVendorGet$Json$Response(params?: ApiVendorGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiVendorGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVendorGet$Json(params?: ApiVendorGet$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiVendorGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /** Path part for operation `apiVendorPost()` */
  static readonly ApiVendorPostPath = '/api/vendor';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorPost$Plain$Response(params?: ApiVendorPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiVendorPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorPost$Plain(params?: ApiVendorPost$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiVendorPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorPost$Json$Response(params?: ApiVendorPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiVendorPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorPost$Json(params?: ApiVendorPost$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiVendorPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /** Path part for operation `apiVendorPatch()` */
  static readonly ApiVendorPatchPath = '/api/vendor';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorPatch$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorPatch$Plain$Response(params?: ApiVendorPatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiVendorPatch$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorPatch$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorPatch$Plain(params?: ApiVendorPatch$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiVendorPatch$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorPatch$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorPatch$Json$Response(params?: ApiVendorPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiVendorPatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorPatch$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorPatch$Json(params?: ApiVendorPatch$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiVendorPatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /** Path part for operation `apiVendorIdGet()` */
  static readonly ApiVendorIdGetPath = '/api/vendor/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVendorIdGet$Plain$Response(params: ApiVendorIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiVendorIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVendorIdGet$Plain(params: ApiVendorIdGet$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiVendorIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVendorIdGet$Json$Response(params: ApiVendorIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiVendorIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVendorIdGet$Json(params: ApiVendorIdGet$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiVendorIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /** Path part for operation `apiVendorIdDelete()` */
  static readonly ApiVendorIdDeletePath = '/api/vendor/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVendorIdDelete$Plain$Response(params: ApiVendorIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiVendorIdDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVendorIdDelete$Plain(params: ApiVendorIdDelete$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiVendorIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVendorIdDelete$Json$Response(params: ApiVendorIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiVendorIdDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVendorIdDelete$Json(params: ApiVendorIdDelete$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiVendorIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /** Path part for operation `apiVendorIdProductGet()` */
  static readonly ApiVendorIdProductGetPath = '/api/vendor/{id}/product';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorIdProductGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVendorIdProductGet$Plain$Response(params: ApiVendorIdProductGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiVendorIdProductGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorIdProductGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVendorIdProductGet$Plain(params: ApiVendorIdProductGet$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiVendorIdProductGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorIdProductGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVendorIdProductGet$Json$Response(params: ApiVendorIdProductGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiVendorIdProductGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorIdProductGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVendorIdProductGet$Json(params: ApiVendorIdProductGet$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiVendorIdProductGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

}
