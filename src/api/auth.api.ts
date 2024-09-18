import { GenericAbortSignal } from "axios";
import http from ".";
import settings from "../constants/api.constant";
import { AuthAPIType, IAuthPayload, VerifyType } from "../types/auth.type";

const AuthApi = {
  authenticate: (
    payload?: IAuthPayload | { email: string },
    type?: AuthAPIType
  ) => http[!type ? "put" : "post"](settings.auth[type || "logout"], payload),

  tokenApi: (
    {
      token,
      ...payload
    }: { password?: string; confirmPassword?: string; token: string },
    type?: VerifyType,
    signal?: GenericAbortSignal
  ) => {
    return http[type ? "get" : "put"](
      settings.auth[type || "resetPassword"] + token,
      payload,
      { signal }
    );
  },
};

export default AuthApi;
