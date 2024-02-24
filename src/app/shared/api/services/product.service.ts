/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiProductGet$Json } from '../fn/product/api-product-get-json';
import { ApiProductGet$Json$Params } from '../fn/product/api-product-get-json';
import { apiProductGet$Plain } from '../fn/product/api-product-get-plain';
import { ApiProductGet$Plain$Params } from '../fn/product/api-product-get-plain';
import { apiProductIdDelete$Json } from '../fn/product/api-product-id-delete-json';
import { ApiProductIdDelete$Json$Params } from '../fn/product/api-product-id-delete-json';
import { apiProductIdDelete$Plain } from '../fn/product/api-product-id-delete-plain';
import { ApiProductIdDelete$Plain$Params } from '../fn/product/api-product-id-delete-plain';
import { apiProductIdGet$Json } from '../fn/product/api-product-id-get-json';
import { ApiProductIdGet$Json$Params } from '../fn/product/api-product-id-get-json';
import { apiProductIdGet$Plain } from '../fn/product/api-product-id-get-plain';
import { ApiProductIdGet$Plain$Params } from '../fn/product/api-product-id-get-plain';
import { apiProductIdVendorGet$Json } from '../fn/product/api-product-id-vendor-get-json';
import { ApiProductIdVendorGet$Json$Params } from '../fn/product/api-product-id-vendor-get-json';
import { apiProductIdVendorGet$Plain } from '../fn/product/api-product-id-vendor-get-plain';
import { ApiProductIdVendorGet$Plain$Params } from '../fn/product/api-product-id-vendor-get-plain';
import { apiProductPatch$Json } from '../fn/product/api-product-patch-json';
import { ApiProductPatch$Json$Params } from '../fn/product/api-product-patch-json';
import { apiProductPatch$Plain } from '../fn/product/api-product-patch-plain';
import { ApiProductPatch$Plain$Params } from '../fn/product/api-product-patch-plain';
import { apiProductPost$Json } from '../fn/product/api-product-post-json';
import { ApiProductPost$Json$Params } from '../fn/product/api-product-post-json';
import { apiProductPost$Plain } from '../fn/product/api-product-post-plain';
import { ApiProductPost$Plain$Params } from '../fn/product/api-product-post-plain';
import { ApiResponseDto } from '../models/api-response-dto';

@Injectable({ providedIn: 'root' })
export class ProductService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiProductGet()` */
  static readonly ApiProductGetPath = '/api/product';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductGet$Plain$Response(params?: ApiProductGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiProductGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductGet$Plain(params?: ApiProductGet$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiProductGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductGet$Json$Response(params?: ApiProductGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiProductGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductGet$Json(params?: ApiProductGet$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiProductGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /** Path part for operation `apiProductPost()` */
  static readonly ApiProductPostPath = '/api/product';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductPost$Plain$Response(params?: ApiProductPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiProductPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductPost$Plain(params?: ApiProductPost$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiProductPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductPost$Json$Response(params?: ApiProductPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiProductPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductPost$Json(params?: ApiProductPost$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiProductPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /** Path part for operation `apiProductPatch()` */
  static readonly ApiProductPatchPath = '/api/product';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductPatch$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductPatch$Plain$Response(params?: ApiProductPatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiProductPatch$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductPatch$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductPatch$Plain(params?: ApiProductPatch$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiProductPatch$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductPatch$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductPatch$Json$Response(params?: ApiProductPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiProductPatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductPatch$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductPatch$Json(params?: ApiProductPatch$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiProductPatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /** Path part for operation `apiProductIdGet()` */
  static readonly ApiProductIdGetPath = '/api/product/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductIdGet$Plain$Response(params: ApiProductIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiProductIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductIdGet$Plain(params: ApiProductIdGet$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiProductIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductIdGet$Json$Response(params: ApiProductIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiProductIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductIdGet$Json(params: ApiProductIdGet$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiProductIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /** Path part for operation `apiProductIdDelete()` */
  static readonly ApiProductIdDeletePath = '/api/product/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductIdDelete$Plain$Response(params: ApiProductIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiProductIdDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductIdDelete$Plain(params: ApiProductIdDelete$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiProductIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductIdDelete$Json$Response(params: ApiProductIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiProductIdDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductIdDelete$Json(params: ApiProductIdDelete$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiProductIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /** Path part for operation `apiProductIdVendorGet()` */
  static readonly ApiProductIdVendorGetPath = '/api/product/{id}/vendor';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductIdVendorGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductIdVendorGet$Plain$Response(params: ApiProductIdVendorGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiProductIdVendorGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductIdVendorGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductIdVendorGet$Plain(params: ApiProductIdVendorGet$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiProductIdVendorGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductIdVendorGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductIdVendorGet$Json$Response(params: ApiProductIdVendorGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiProductIdVendorGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProductIdVendorGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductIdVendorGet$Json(params: ApiProductIdVendorGet$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiProductIdVendorGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

}
