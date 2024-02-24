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
import { apiUnitofmeasureGet$Json } from '../fn/unit-of-measure/api-unitofmeasure-get-json';
import { ApiUnitofmeasureGet$Json$Params } from '../fn/unit-of-measure/api-unitofmeasure-get-json';
import { apiUnitofmeasureGet$Plain } from '../fn/unit-of-measure/api-unitofmeasure-get-plain';
import { ApiUnitofmeasureGet$Plain$Params } from '../fn/unit-of-measure/api-unitofmeasure-get-plain';
import { apiUnitofmeasureIdDelete$Json } from '../fn/unit-of-measure/api-unitofmeasure-id-delete-json';
import { ApiUnitofmeasureIdDelete$Json$Params } from '../fn/unit-of-measure/api-unitofmeasure-id-delete-json';
import { apiUnitofmeasureIdDelete$Plain } from '../fn/unit-of-measure/api-unitofmeasure-id-delete-plain';
import { ApiUnitofmeasureIdDelete$Plain$Params } from '../fn/unit-of-measure/api-unitofmeasure-id-delete-plain';
import { apiUnitofmeasurePatch$Json } from '../fn/unit-of-measure/api-unitofmeasure-patch-json';
import { ApiUnitofmeasurePatch$Json$Params } from '../fn/unit-of-measure/api-unitofmeasure-patch-json';
import { apiUnitofmeasurePatch$Plain } from '../fn/unit-of-measure/api-unitofmeasure-patch-plain';
import { ApiUnitofmeasurePatch$Plain$Params } from '../fn/unit-of-measure/api-unitofmeasure-patch-plain';
import { apiUnitofmeasurePost$Json } from '../fn/unit-of-measure/api-unitofmeasure-post-json';
import { ApiUnitofmeasurePost$Json$Params } from '../fn/unit-of-measure/api-unitofmeasure-post-json';
import { apiUnitofmeasurePost$Plain } from '../fn/unit-of-measure/api-unitofmeasure-post-plain';
import { ApiUnitofmeasurePost$Plain$Params } from '../fn/unit-of-measure/api-unitofmeasure-post-plain';

@Injectable({ providedIn: 'root' })
export class UnitOfMeasureService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiUnitofmeasureGet()` */
  static readonly ApiUnitofmeasureGetPath = '/api/unitofmeasure';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUnitofmeasureGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUnitofmeasureGet$Plain$Response(params?: ApiUnitofmeasureGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiUnitofmeasureGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUnitofmeasureGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUnitofmeasureGet$Plain(params?: ApiUnitofmeasureGet$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiUnitofmeasureGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUnitofmeasureGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUnitofmeasureGet$Json$Response(params?: ApiUnitofmeasureGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiUnitofmeasureGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUnitofmeasureGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUnitofmeasureGet$Json(params?: ApiUnitofmeasureGet$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiUnitofmeasureGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /** Path part for operation `apiUnitofmeasurePost()` */
  static readonly ApiUnitofmeasurePostPath = '/api/unitofmeasure';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUnitofmeasurePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUnitofmeasurePost$Plain$Response(params?: ApiUnitofmeasurePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiUnitofmeasurePost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUnitofmeasurePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUnitofmeasurePost$Plain(params?: ApiUnitofmeasurePost$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiUnitofmeasurePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUnitofmeasurePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUnitofmeasurePost$Json$Response(params?: ApiUnitofmeasurePost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiUnitofmeasurePost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUnitofmeasurePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUnitofmeasurePost$Json(params?: ApiUnitofmeasurePost$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiUnitofmeasurePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /** Path part for operation `apiUnitofmeasurePatch()` */
  static readonly ApiUnitofmeasurePatchPath = '/api/unitofmeasure';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUnitofmeasurePatch$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUnitofmeasurePatch$Plain$Response(params?: ApiUnitofmeasurePatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiUnitofmeasurePatch$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUnitofmeasurePatch$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUnitofmeasurePatch$Plain(params?: ApiUnitofmeasurePatch$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiUnitofmeasurePatch$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUnitofmeasurePatch$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUnitofmeasurePatch$Json$Response(params?: ApiUnitofmeasurePatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiUnitofmeasurePatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUnitofmeasurePatch$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUnitofmeasurePatch$Json(params?: ApiUnitofmeasurePatch$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiUnitofmeasurePatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /** Path part for operation `apiUnitofmeasureIdDelete()` */
  static readonly ApiUnitofmeasureIdDeletePath = '/api/unitofmeasure/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUnitofmeasureIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUnitofmeasureIdDelete$Plain$Response(params: ApiUnitofmeasureIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiUnitofmeasureIdDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUnitofmeasureIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUnitofmeasureIdDelete$Plain(params: ApiUnitofmeasureIdDelete$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiUnitofmeasureIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUnitofmeasureIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUnitofmeasureIdDelete$Json$Response(params: ApiUnitofmeasureIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiUnitofmeasureIdDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUnitofmeasureIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUnitofmeasureIdDelete$Json(params: ApiUnitofmeasureIdDelete$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiUnitofmeasureIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

}
