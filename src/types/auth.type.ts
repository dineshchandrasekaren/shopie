import settings from "../constants/api.constant";
import { AUTH_ROLES } from "../constants/roles.constant";

export type VerifyType = "signupToken" | "resetToken";
export type AuthRole = (typeof AUTH_ROLES)[keyof typeof AUTH_ROLES];
export type AuthAPIType = keyof typeof settings.auth | "";
export interface IAuthCallBack {
  next: (response: IAuthSuccessResponse) => void;
}
export interface IAuthPayload {
  name?: string;
  email?: string;
  username?: string;
  password?: string;
  role?: AuthRole;
}

export interface IUser extends IAuthPayload {
  _id?: string;
}
interface IAuthErrors {
  errors?: Record<string, string>;
}
export interface IAuthState extends IAuthErrors {
  status?: string;
  failure?: string;
  authModal?: boolean;
  modalType?: AuthAPIType;
  isAuth: boolean;
  user: IUser;
}

export interface IAuthSuccessResponse extends IAuthErrors {
  success: boolean;
  message: string;
  user: IUser;
  token: string;
  setup?: boolean;
}

export interface IAuthModalPayload {
  isOpen: boolean;
  type?: string;
}
