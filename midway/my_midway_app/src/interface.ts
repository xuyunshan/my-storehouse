/**
 * @description User-Service parameters
 */
export interface IUserOptions {
  uid: string;
}
export interface IGetUserResponse {
  success: boolean;
  message: string;
  data: IUserOptions;
}

export interface INumOptions {
  num: number;
}
export interface IGetNumResponse {
  success: boolean;
  message: string;
  data: INumOptions;
}
