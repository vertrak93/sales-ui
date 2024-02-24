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
import { apiVendorProductIdDelete$Json } from '../fn/vendor-product/api-vendor-product-id-delete-json';
import { ApiVendorProductIdDelete$Json$Params } from '../fn/vendor-product/api-vendor-product-id-delete-json';
import { apiVendorProductIdDelete$Plain } from '../fn/vendor-product/api-vendor-product-id-delete-plain';
import { ApiVendorProductIdDelete$Plain$Params } from '../fn/vendor-product/api-vendor-product-id-delete-plain';
import { apiVendorProductPatch$Json } from '../fn/vendor-product/api-vendor-product-patch-json';
import { ApiVendorProductPatch$Json$Params } from '../fn/vendor-product/api-vendor-product-patch-json';
import { apiVendorProductPatch$Plain } from '../fn/vendor-product/api-vendor-product-patch-plain';
import { ApiVendorProductPatch$Plain$Params } from '../fn/vendor-product/api-vendor-product-patch-plain';
import { apiVendorProductPost$Json } from '../fn/vendor-product/api-vendor-product-post-json';
import { ApiVendorProductPost$Json$Params } from '../fn/vendor-product/api-vendor-product-post-json';
import { apiVendorProductPost$Plain } from '../fn/vendor-product/api-vendor-product-post-plain';
import { ApiVendorProductPost$Plain$Params } from '../fn/vendor-product/api-vendor-product-post-plain';

@Injectable({ providedIn: 'root' })
export class VendorProductService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiVendorProductPost()` */
  static readonly ApiVendorProductPostPath = '/api/vendor/product';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorProductPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorProductPost$Plain$Response(params?: ApiVendorProductPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiVendorProductPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorProductPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorProductPost$Plain(params?: ApiVendorProductPost$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiVendorProductPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorProductPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorProductPost$Json$Response(params?: ApiVendorProductPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiVendorProductPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorProductPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorProductPost$Json(params?: ApiVendorProductPost$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiVendorProductPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /** Path part for operation `apiVendorProductPatch()` */
  static readonly ApiVendorProductPatchPath = '/api/vendor/product';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorProductPatch$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorProductPatch$Plain$Response(params?: ApiVendorProductPatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiVendorProductPatch$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorProductPatch$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorProductPatch$Plain(params?: ApiVendorProductPatch$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiVendorProductPatch$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorProductPatch$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorProductPatch$Json$Response(params?: ApiVendorProductPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiVendorProductPatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorProductPatch$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorProductPatch$Json(params?: ApiVendorProductPatch$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiVendorProductPatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /** Path part for operation `apiVendorProductIdDelete()` */
  static readonly ApiVendorProductIdDeletePath = '/api/vendor/product/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorProductIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVendorProductIdDelete$Plain$Response(params: ApiVendorProductIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiVendorProductIdDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorProductIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVendorProductIdDelete$Plain(params: ApiVendorProductIdDelete$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiVendorProductIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorProductIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVendorProductIdDelete$Json$Response(params: ApiVendorProductIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiVendorProductIdDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorProductIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVendorProductIdDelete$Json(params: ApiVendorProductIdDelete$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiVendorProductIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

}
