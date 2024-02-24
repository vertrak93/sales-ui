/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiBankGet$Json } from '../fn/bank/api-bank-get-json';
import { ApiBankGet$Json$Params } from '../fn/bank/api-bank-get-json';
import { apiBankGet$Plain } from '../fn/bank/api-bank-get-plain';
import { ApiBankGet$Plain$Params } from '../fn/bank/api-bank-get-plain';
import { apiBankIdDelete$Json } from '../fn/bank/api-bank-id-delete-json';
import { ApiBankIdDelete$Json$Params } from '../fn/bank/api-bank-id-delete-json';
import { apiBankIdDelete$Plain } from '../fn/bank/api-bank-id-delete-plain';
import { ApiBankIdDelete$Plain$Params } from '../fn/bank/api-bank-id-delete-plain';
import { apiBankPatch$Json } from '../fn/bank/api-bank-patch-json';
import { ApiBankPatch$Json$Params } from '../fn/bank/api-bank-patch-json';
import { apiBankPatch$Plain } from '../fn/bank/api-bank-patch-plain';
import { ApiBankPatch$Plain$Params } from '../fn/bank/api-bank-patch-plain';
import { apiBankPost$Json } from '../fn/bank/api-bank-post-json';
import { ApiBankPost$Json$Params } from '../fn/bank/api-bank-post-json';
import { apiBankPost$Plain } from '../fn/bank/api-bank-post-plain';
import { ApiBankPost$Plain$Params } from '../fn/bank/api-bank-post-plain';
import { ApiResponseDto } from '../models/api-response-dto';

@Injectable({ providedIn: 'root' })
export class BankService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiBankGet()` */
  static readonly ApiBankGetPath = '/api/bank';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBankGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBankGet$Plain$Response(params?: ApiBankGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiBankGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBankGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBankGet$Plain(params?: ApiBankGet$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiBankGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBankGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBankGet$Json$Response(params?: ApiBankGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiBankGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBankGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBankGet$Json(params?: ApiBankGet$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiBankGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /** Path part for operation `apiBankPost()` */
  static readonly ApiBankPostPath = '/api/bank';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBankPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBankPost$Plain$Response(params?: ApiBankPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiBankPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBankPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBankPost$Plain(params?: ApiBankPost$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiBankPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBankPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBankPost$Json$Response(params?: ApiBankPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiBankPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBankPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBankPost$Json(params?: ApiBankPost$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiBankPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /** Path part for operation `apiBankPatch()` */
  static readonly ApiBankPatchPath = '/api/bank';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBankPatch$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBankPatch$Plain$Response(params?: ApiBankPatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiBankPatch$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBankPatch$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBankPatch$Plain(params?: ApiBankPatch$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiBankPatch$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBankPatch$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBankPatch$Json$Response(params?: ApiBankPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiBankPatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBankPatch$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBankPatch$Json(params?: ApiBankPatch$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiBankPatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /** Path part for operation `apiBankIdDelete()` */
  static readonly ApiBankIdDeletePath = '/api/bank/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBankIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBankIdDelete$Plain$Response(params: ApiBankIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiBankIdDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBankIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBankIdDelete$Plain(params: ApiBankIdDelete$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiBankIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBankIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBankIdDelete$Json$Response(params: ApiBankIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiBankIdDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBankIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBankIdDelete$Json(params: ApiBankIdDelete$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiBankIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

}
