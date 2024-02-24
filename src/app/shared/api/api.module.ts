/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { AuthService } from './services/auth.service';
import { BankService } from './services/bank.service';
import { BrandService } from './services/brand.service';
import { CategoryService } from './services/category.service';
import { PresentationService } from './services/presentation.service';
import { ProductService } from './services/product.service';
import { SubCategoryService } from './services/sub-category.service';
import { TelephonyService } from './services/telephony.service';
import { UnitOfMeasureService } from './services/unit-of-measure.service';
import { UserService } from './services/user.service';
import { UserRoleService } from './services/user-role.service';
import { VendorService } from './services/vendor.service';
import { VendorAddressService } from './services/vendor-address.service';
import { VendorBankAccountService } from './services/vendor-bank-account.service';
import { VendorPhoneService } from './services/vendor-phone.service';
import { VendorProductService } from './services/vendor-product.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AuthService,
    BankService,
    BrandService,
    CategoryService,
    PresentationService,
    ProductService,
    SubCategoryService,
    TelephonyService,
    UnitOfMeasureService,
    UserService,
    UserRoleService,
    VendorService,
    VendorAddressService,
    VendorBankAccountService,
    VendorPhoneService,
    VendorProductService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
