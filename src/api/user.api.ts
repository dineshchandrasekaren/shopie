import { GenericAbortSignal } from "axios";
import http from ".";
import settings from "../constants/api.constant";
import { AuthAPIType, IAuthPayload, VerifyType } from "../types/auth.type";
import { IShopDetails } from "../types/user.type";

const userApi = {
  saveShopDetails: (payload: IShopDetails) =>
    http.post(settings.user.saveShopDetails, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
};

export default userApi;
