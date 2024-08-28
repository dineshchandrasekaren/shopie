import http from ".";
import settings from "../constants/api.constant";
import { AuthAPIType, IAuthPayload } from "../types/auth.type";

namespace AuthApi {
  export const authenticate = (
    payload: IAuthPayload | { email: string },
    type: AuthAPIType
  ) => http.post(settings.auth[type], payload);
}

export default AuthApi;
