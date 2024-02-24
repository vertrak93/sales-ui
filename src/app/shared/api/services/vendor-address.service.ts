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
import { apiVendorAddressIdDelete$Json } from '../fn/vendor-address/api-vendor-address-id-delete-json';
import { ApiVendorAddressIdDelete$Json$Params } from '../fn/vendor-address/api-vendor-address-id-delete-json';
import { apiVendorAddressIdDelete$Plain } from '../fn/vendor-address/api-vendor-address-id-delete-plain';
import { ApiVendorAddressIdDelete$Plain$Params } from '../fn/vendor-address/api-vendor-address-id-delete-plain';
import { apiVendorAddressPatch$Json } from '../fn/vendor-address/api-vendor-address-patch-json';
import { ApiVendorAddressPatch$Json$Params } from '../fn/vendor-address/api-vendor-address-patch-json';
import { apiVendorAddressPatch$Plain } from '../fn/vendor-address/api-vendor-address-patch-plain';
import { ApiVendorAddressPatch$Plain$Params } from '../fn/vendor-address/api-vendor-address-patch-plain';
import { apiVendorAddressPost$Json } from '../fn/vendor-address/api-vendor-address-post-json';
import { ApiVendorAddressPost$Json$Params } from '../fn/vendor-address/api-vendor-address-post-json';
import { apiVendorAddressPost$Plain } from '../fn/vendor-address/api-vendor-address-post-plain';
import { ApiVendorAddressPost$Plain$Params } from '../fn/vendor-address/api-vendor-address-post-plain';

@Injectable({ providedIn: 'root' })
export class VendorAddressService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiVendorAddressPost()` */
  static readonly ApiVendorAddressPostPath = '/api/vendor/address';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorAddressPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorAddressPost$Plain$Response(params?: ApiVendorAddressPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiVendorAddressPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorAddressPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorAddressPost$Plain(params?: ApiVendorAddressPost$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiVendorAddressPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorAddressPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorAddressPost$Json$Response(params?: ApiVendorAddressPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiVendorAddressPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorAddressPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorAddressPost$Json(params?: ApiVendorAddressPost$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiVendorAddressPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /** Path part for operation `apiVendorAddressPatch()` */
  static readonly ApiVendorAddressPatchPath = '/api/vendor/address';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorAddressPatch$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorAddressPatch$Plain$Response(params?: ApiVendorAddressPatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiVendorAddressPatch$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorAddressPatch$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorAddressPatch$Plain(params?: ApiVendorAddressPatch$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiVendorAddressPatch$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorAddressPatch$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorAddressPatch$Json$Response(params?: ApiVendorAddressPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiVendorAddressPatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorAddressPatch$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorAddressPatch$Json(params?: ApiVendorAddressPatch$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiVendorAddressPatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /** Path part for operation `apiVendorAddressIdDelete()` */
  static readonly ApiVendorAddressIdDeletePath = '/api/vendor/address/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorAddressIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVendorAddressIdDelete$Plain$Response(params: ApiVendorAddressIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiVendorAddressIdDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorAddressIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVendorAddressIdDelete$Plain(params: ApiVendorAddressIdDelete$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiVendorAddressIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorAddressIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVendorAddressIdDelete$Json$Response(params: ApiVendorAddressIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiVendorAddressIdDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorAddressIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVendorAddressIdDelete$Json(params: ApiVendorAddressIdDelete$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiVendorAddressIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

}
