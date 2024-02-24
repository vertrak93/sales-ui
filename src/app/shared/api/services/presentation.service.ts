/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiPresentationGet$Json } from '../fn/presentation/api-presentation-get-json';
import { ApiPresentationGet$Json$Params } from '../fn/presentation/api-presentation-get-json';
import { apiPresentationGet$Plain } from '../fn/presentation/api-presentation-get-plain';
import { ApiPresentationGet$Plain$Params } from '../fn/presentation/api-presentation-get-plain';
import { apiPresentationIdDelete$Json } from '../fn/presentation/api-presentation-id-delete-json';
import { ApiPresentationIdDelete$Json$Params } from '../fn/presentation/api-presentation-id-delete-json';
import { apiPresentationIdDelete$Plain } from '../fn/presentation/api-presentation-id-delete-plain';
import { ApiPresentationIdDelete$Plain$Params } from '../fn/presentation/api-presentation-id-delete-plain';
import { apiPresentationPatch$Json } from '../fn/presentation/api-presentation-patch-json';
import { ApiPresentationPatch$Json$Params } from '../fn/presentation/api-presentation-patch-json';
import { apiPresentationPatch$Plain } from '../fn/presentation/api-presentation-patch-plain';
import { ApiPresentationPatch$Plain$Params } from '../fn/presentation/api-presentation-patch-plain';
import { apiPresentationPost$Json } from '../fn/presentation/api-presentation-post-json';
import { ApiPresentationPost$Json$Params } from '../fn/presentation/api-presentation-post-json';
import { apiPresentationPost$Plain } from '../fn/presentation/api-presentation-post-plain';
import { ApiPresentationPost$Plain$Params } from '../fn/presentation/api-presentation-post-plain';
import { ApiResponseDto } from '../models/api-response-dto';

@Injectable({ providedIn: 'root' })
export class PresentationService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiPresentationGet()` */
  static readonly ApiPresentationGetPath = '/api/presentation';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPresentationGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPresentationGet$Plain$Response(params?: ApiPresentationGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiPresentationGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPresentationGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPresentationGet$Plain(params?: ApiPresentationGet$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiPresentationGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPresentationGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPresentationGet$Json$Response(params?: ApiPresentationGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiPresentationGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPresentationGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPresentationGet$Json(params?: ApiPresentationGet$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiPresentationGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /** Path part for operation `apiPresentationPost()` */
  static readonly ApiPresentationPostPath = '/api/presentation';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPresentationPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPresentationPost$Plain$Response(params?: ApiPresentationPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiPresentationPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPresentationPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPresentationPost$Plain(params?: ApiPresentationPost$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiPresentationPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPresentationPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPresentationPost$Json$Response(params?: ApiPresentationPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiPresentationPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPresentationPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPresentationPost$Json(params?: ApiPresentationPost$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiPresentationPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /** Path part for operation `apiPresentationPatch()` */
  static readonly ApiPresentationPatchPath = '/api/presentation';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPresentationPatch$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPresentationPatch$Plain$Response(params?: ApiPresentationPatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiPresentationPatch$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPresentationPatch$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPresentationPatch$Plain(params?: ApiPresentationPatch$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiPresentationPatch$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPresentationPatch$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPresentationPatch$Json$Response(params?: ApiPresentationPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiPresentationPatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPresentationPatch$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPresentationPatch$Json(params?: ApiPresentationPatch$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiPresentationPatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /** Path part for operation `apiPresentationIdDelete()` */
  static readonly ApiPresentationIdDeletePath = '/api/presentation/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPresentationIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPresentationIdDelete$Plain$Response(params: ApiPresentationIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiPresentationIdDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPresentationIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPresentationIdDelete$Plain(params: ApiPresentationIdDelete$Plain$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiPresentationIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPresentationIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPresentationIdDelete$Json$Response(params: ApiPresentationIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseDto>> {
    return apiPresentationIdDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPresentationIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPresentationIdDelete$Json(params: ApiPresentationIdDelete$Json$Params, context?: HttpContext): Observable<ApiResponseDto> {
    return this.apiPresentationIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>): ApiResponseDto => r.body)
    );
  }

}
