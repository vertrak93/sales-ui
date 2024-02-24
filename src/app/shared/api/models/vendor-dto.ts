/* tslint:disable */
/* eslint-disable */
import { VendorAddressDto } from '../models/vendor-address-dto';
import { VendorBankAccountDto } from '../models/vendor-bank-account-dto';
import { VendorPhoneDto } from '../models/vendor-phone-dto';
export interface VendorDto {
  tin?: string | null;
  vendorAddress?: Array<VendorAddressDto> | null;
  vendorBankAccount?: Array<VendorBankAccountDto> | null;
  vendorId?: number;
  vendorName?: string | null;
  vendorPhone?: Array<VendorPhoneDto> | null;
}
