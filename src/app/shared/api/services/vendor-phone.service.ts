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
import { apiVendorPhoneIdDelete$Json } from '../fn/vendor-phone/api-vendor-phone-id-delete-json';
import { ApiVendorPhoneIdDelete$Json$Params } from '../fn/vendor-phone/api-vendor-phone-id-delete-json';
import { apiVendorPhoneIdDelete$Plain } from '../fn/vendor-phone/api-vendor-phone-id-delete-plain';
import { ApiVendorPhoneIdDelete$Plain$Params } from '../fn/vendor-phone/api-vendor-phone-id-delete-plain';
import { apiVendorPhonePatch$Json } from '../fn/vendor-phone/api-vendor-phone-patch-json';
import { ApiVendorPhonePatch$Json$Params } from '../fn/vendor-phone/api-vendor-phone-patch-json';
import { apiVendorPhonePatch$Plain } from '../fn/vendor-phone/api-vendor-phone-patch-plain';
import { ApiVendorPhonePatch$Plain$Params } from '../fn/vendor-phone/api-vendor-phone-patch-plain';
import { apiVendorPhonePost$Json } from '../fn/vendor-phone/api-vendor-phone-post-json';
import { ApiVendorPhonePost$Json$Params } from '../fn/vendor-phone/api-vendor-phone-post-json';
import { apiVendorPhonePost$Plain } from '../fn/vendor-phone/api-vendor-phone-post-plain';
import { ApiVendorPhonePost$Plain$Params } from '../fn/vendor-phone/api-vendor-phone-post-plain';

@Injectable({ providedIn: 'root' })
export class VendorPhoneService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiVendorPhonePost()` */
  static readonly ApiVendorPhonePostPath = '/api/vendor/phone';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorPhonePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorPhonePost$Plain$Response(params?: ApiVendorPhonePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiVendorPhonePost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorPhonePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorPhonePost$Plain(params?: ApiVendorPhonePost$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiVendorPhonePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorPhonePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorPhonePost$Json$Response(params?: ApiVendorPhonePost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiVendorPhonePost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorPhonePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorPhonePost$Json(params?: ApiVendorPhonePost$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiVendorPhonePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /** Path part for operation `apiVendorPhonePatch()` */
  static readonly ApiVendorPhonePatchPath = '/api/vendor/phone';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorPhonePatch$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorPhonePatch$Plain$Response(params?: ApiVendorPhonePatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiVendorPhonePatch$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorPhonePatch$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorPhonePatch$Plain(params?: ApiVendorPhonePatch$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiVendorPhonePatch$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorPhonePatch$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorPhonePatch$Json$Response(params?: ApiVendorPhonePatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiVendorPhonePatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorPhonePatch$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorPhonePatch$Json(params?: ApiVendorPhonePatch$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiVendorPhonePatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /** Path part for operation `apiVendorPhoneIdDelete()` */
  static readonly ApiVendorPhoneIdDeletePath = '/api/vendor/phone/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorPhoneIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVendorPhoneIdDelete$Plain$Response(params: ApiVendorPhoneIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiVendorPhoneIdDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorPhoneIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVendorPhoneIdDelete$Plain(params: ApiVendorPhoneIdDelete$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiVendorPhoneIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorPhoneIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVendorPhoneIdDelete$Json$Response(params: ApiVendorPhoneIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiVendorPhoneIdDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorPhoneIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVendorPhoneIdDelete$Json(params: ApiVendorPhoneIdDelete$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiVendorPhoneIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

}
