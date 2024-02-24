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
import { apiSubcategoryGet$Json } from '../fn/sub-category/api-subcategory-get-json';
import { ApiSubcategoryGet$Json$Params } from '../fn/sub-category/api-subcategory-get-json';
import { apiSubcategoryGet$Plain } from '../fn/sub-category/api-subcategory-get-plain';
import { ApiSubcategoryGet$Plain$Params } from '../fn/sub-category/api-subcategory-get-plain';
import { apiSubcategoryIdDelete$Json } from '../fn/sub-category/api-subcategory-id-delete-json';
import { ApiSubcategoryIdDelete$Json$Params } from '../fn/sub-category/api-subcategory-id-delete-json';
import { apiSubcategoryIdDelete$Plain } from '../fn/sub-category/api-subcategory-id-delete-plain';
import { ApiSubcategoryIdDelete$Plain$Params } from '../fn/sub-category/api-subcategory-id-delete-plain';
import { apiSubcategoryPatch$Json } from '../fn/sub-category/api-subcategory-patch-json';
import { ApiSubcategoryPatch$Json$Params } from '../fn/sub-category/api-subcategory-patch-json';
import { apiSubcategoryPatch$Plain } from '../fn/sub-category/api-subcategory-patch-plain';
import { ApiSubcategoryPatch$Plain$Params } from '../fn/sub-category/api-subcategory-patch-plain';
import { apiSubcategoryPost$Json } from '../fn/sub-category/api-subcategory-post-json';
import { ApiSubcategoryPost$Json$Params } from '../fn/sub-category/api-subcategory-post-json';
import { apiSubcategoryPost$Plain } from '../fn/sub-category/api-subcategory-post-plain';
import { ApiSubcategoryPost$Plain$Params } from '../fn/sub-category/api-subcategory-post-plain';

@Injectable({ providedIn: 'root' })
export class SubCategoryService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiSubcategoryGet()` */
  static readonly ApiSubcategoryGetPath = '/api/subcategory';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSubcategoryGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubcategoryGet$Plain$Response(params?: ApiSubcategoryGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiSubcategoryGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSubcategoryGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubcategoryGet$Plain(params?: ApiSubcategoryGet$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiSubcategoryGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSubcategoryGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubcategoryGet$Json$Response(params?: ApiSubcategoryGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiSubcategoryGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSubcategoryGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubcategoryGet$Json(params?: ApiSubcategoryGet$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiSubcategoryGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /** Path part for operation `apiSubcategoryPost()` */
  static readonly ApiSubcategoryPostPath = '/api/subcategory';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSubcategoryPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSubcategoryPost$Plain$Response(params?: ApiSubcategoryPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiSubcategoryPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSubcategoryPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSubcategoryPost$Plain(params?: ApiSubcategoryPost$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiSubcategoryPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSubcategoryPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSubcategoryPost$Json$Response(params?: ApiSubcategoryPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiSubcategoryPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSubcategoryPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSubcategoryPost$Json(params?: ApiSubcategoryPost$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiSubcategoryPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /** Path part for operation `apiSubcategoryPatch()` */
  static readonly ApiSubcategoryPatchPath = '/api/subcategory';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSubcategoryPatch$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSubcategoryPatch$Plain$Response(params?: ApiSubcategoryPatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiSubcategoryPatch$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSubcategoryPatch$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSubcategoryPatch$Plain(params?: ApiSubcategoryPatch$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiSubcategoryPatch$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSubcategoryPatch$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSubcategoryPatch$Json$Response(params?: ApiSubcategoryPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiSubcategoryPatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSubcategoryPatch$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSubcategoryPatch$Json(params?: ApiSubcategoryPatch$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiSubcategoryPatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /** Path part for operation `apiSubcategoryIdDelete()` */
  static readonly ApiSubcategoryIdDeletePath = '/api/subcategory/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSubcategoryIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubcategoryIdDelete$Plain$Response(params: ApiSubcategoryIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiSubcategoryIdDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSubcategoryIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubcategoryIdDelete$Plain(params: ApiSubcategoryIdDelete$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiSubcategoryIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSubcategoryIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubcategoryIdDelete$Json$Response(params: ApiSubcategoryIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiSubcategoryIdDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSubcategoryIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubcategoryIdDelete$Json(params: ApiSubcategoryIdDelete$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiSubcategoryIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

}
