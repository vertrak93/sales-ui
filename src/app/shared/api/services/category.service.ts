/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiCategoryGet$Json } from '../fn/category/api-category-get-json';
import { ApiCategoryGet$Json$Params } from '../fn/category/api-category-get-json';
import { apiCategoryGet$Plain } from '../fn/category/api-category-get-plain';
import { ApiCategoryGet$Plain$Params } from '../fn/category/api-category-get-plain';
import { apiCategoryIdDelete$Json } from '../fn/category/api-category-id-delete-json';
import { ApiCategoryIdDelete$Json$Params } from '../fn/category/api-category-id-delete-json';
import { apiCategoryIdDelete$Plain } from '../fn/category/api-category-id-delete-plain';
import { ApiCategoryIdDelete$Plain$Params } from '../fn/category/api-category-id-delete-plain';
import { apiCategoryPatch$Json } from '../fn/category/api-category-patch-json';
import { ApiCategoryPatch$Json$Params } from '../fn/category/api-category-patch-json';
import { apiCategoryPatch$Plain } from '../fn/category/api-category-patch-plain';
import { ApiCategoryPatch$Plain$Params } from '../fn/category/api-category-patch-plain';
import { apiCategoryPost$Json } from '../fn/category/api-category-post-json';
import { ApiCategoryPost$Json$Params } from '../fn/category/api-category-post-json';
import { apiCategoryPost$Plain } from '../fn/category/api-category-post-plain';
import { ApiCategoryPost$Plain$Params } from '../fn/category/api-category-post-plain';
import { ApiResponseDto } from '../models/api-response-dto';

@Injectable({ providedIn: 'root' })
export class CategoryService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiCategoryGet()` */
  static readonly ApiCategoryGetPath = '/api/category';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryGet$Plain$Response(params?: ApiCategoryGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiCategoryGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCategoryGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryGet$Plain(params?: ApiCategoryGet$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiCategoryGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryGet$Json$Response(params?: ApiCategoryGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiCategoryGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCategoryGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryGet$Json(params?: ApiCategoryGet$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiCategoryGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /** Path part for operation `apiCategoryPost()` */
  static readonly ApiCategoryPostPath = '/api/category';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryPost$Plain$Response(params?: ApiCategoryPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiCategoryPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCategoryPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryPost$Plain(params?: ApiCategoryPost$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiCategoryPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryPost$Json$Response(params?: ApiCategoryPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiCategoryPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCategoryPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryPost$Json(params?: ApiCategoryPost$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiCategoryPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /** Path part for operation `apiCategoryPatch()` */
  static readonly ApiCategoryPatchPath = '/api/category';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryPatch$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryPatch$Plain$Response(params?: ApiCategoryPatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiCategoryPatch$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCategoryPatch$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryPatch$Plain(params?: ApiCategoryPatch$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiCategoryPatch$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryPatch$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryPatch$Json$Response(params?: ApiCategoryPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiCategoryPatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCategoryPatch$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryPatch$Json(params?: ApiCategoryPatch$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiCategoryPatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /** Path part for operation `apiCategoryIdDelete()` */
  static readonly ApiCategoryIdDeletePath = '/api/category/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryIdDelete$Plain$Response(params: ApiCategoryIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiCategoryIdDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCategoryIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryIdDelete$Plain(params: ApiCategoryIdDelete$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiCategoryIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryIdDelete$Json$Response(params: ApiCategoryIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiCategoryIdDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCategoryIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryIdDelete$Json(params: ApiCategoryIdDelete$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiCategoryIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

}
