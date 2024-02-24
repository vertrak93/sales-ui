/* tslint:disable */
/* eslint-disable */
import { RoleDto } from '../models/role-dto';
import { UserDto } from '../models/user-dto';
export interface TokenDto {
  jwt?: string | null;
  refreshToken?: string | null;
  role?: Array<RoleDto> | null;
  user?: UserDto;
}
