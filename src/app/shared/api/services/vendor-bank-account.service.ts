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
import { apiVendorBankAccountIdDelete$Json } from '../fn/vendor-bank-account/api-vendor-bank-account-id-delete-json';
import { ApiVendorBankAccountIdDelete$Json$Params } from '../fn/vendor-bank-account/api-vendor-bank-account-id-delete-json';
import { apiVendorBankAccountIdDelete$Plain } from '../fn/vendor-bank-account/api-vendor-bank-account-id-delete-plain';
import { ApiVendorBankAccountIdDelete$Plain$Params } from '../fn/vendor-bank-account/api-vendor-bank-account-id-delete-plain';
import { apiVendorBankAccountPatch$Json } from '../fn/vendor-bank-account/api-vendor-bank-account-patch-json';
import { ApiVendorBankAccountPatch$Json$Params } from '../fn/vendor-bank-account/api-vendor-bank-account-patch-json';
import { apiVendorBankAccountPatch$Plain } from '../fn/vendor-bank-account/api-vendor-bank-account-patch-plain';
import { ApiVendorBankAccountPatch$Plain$Params } from '../fn/vendor-bank-account/api-vendor-bank-account-patch-plain';
import { apiVendorBankAccountPost$Json } from '../fn/vendor-bank-account/api-vendor-bank-account-post-json';
import { ApiVendorBankAccountPost$Json$Params } from '../fn/vendor-bank-account/api-vendor-bank-account-post-json';
import { apiVendorBankAccountPost$Plain } from '../fn/vendor-bank-account/api-vendor-bank-account-post-plain';
import { ApiVendorBankAccountPost$Plain$Params } from '../fn/vendor-bank-account/api-vendor-bank-account-post-plain';

@Injectable({ providedIn: 'root' })
export class VendorBankAccountService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiVendorBankAccountPost()` */
  static readonly ApiVendorBankAccountPostPath = '/api/vendor/bank-account';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorBankAccountPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorBankAccountPost$Plain$Response(params?: ApiVendorBankAccountPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiVendorBankAccountPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorBankAccountPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorBankAccountPost$Plain(params?: ApiVendorBankAccountPost$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiVendorBankAccountPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorBankAccountPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorBankAccountPost$Json$Response(params?: ApiVendorBankAccountPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiVendorBankAccountPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorBankAccountPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorBankAccountPost$Json(params?: ApiVendorBankAccountPost$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiVendorBankAccountPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /** Path part for operation `apiVendorBankAccountPatch()` */
  static readonly ApiVendorBankAccountPatchPath = '/api/vendor/bank-account';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorBankAccountPatch$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorBankAccountPatch$Plain$Response(params?: ApiVendorBankAccountPatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiVendorBankAccountPatch$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorBankAccountPatch$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorBankAccountPatch$Plain(params?: ApiVendorBankAccountPatch$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiVendorBankAccountPatch$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorBankAccountPatch$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorBankAccountPatch$Json$Response(params?: ApiVendorBankAccountPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiVendorBankAccountPatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorBankAccountPatch$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiVendorBankAccountPatch$Json(params?: ApiVendorBankAccountPatch$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiVendorBankAccountPatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /** Path part for operation `apiVendorBankAccountIdDelete()` */
  static readonly ApiVendorBankAccountIdDeletePath = '/api/vendor/bank-account/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorBankAccountIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVendorBankAccountIdDelete$Plain$Response(params: ApiVendorBankAccountIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiVendorBankAccountIdDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorBankAccountIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVendorBankAccountIdDelete$Plain(params: ApiVendorBankAccountIdDelete$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiVendorBankAccountIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVendorBankAccountIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVendorBankAccountIdDelete$Json$Response(params: ApiVendorBankAccountIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiVendorBankAccountIdDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiVendorBankAccountIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiVendorBankAccountIdDelete$Json(params: ApiVendorBankAccountIdDelete$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiVendorBankAccountIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

}
