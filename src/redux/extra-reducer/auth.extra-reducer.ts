import { PayloadAction, SerializedError } from "@reduxjs/toolkit";
import {
  AuthAPIType,
  IAuthState,
  IAuthModalPayload,
  IAuthSuccessResponse,
} from "../../types/auth.type";
import useSession from "../../hooks/useSession";
const { setSessionValue } = useSession();

namespace AuthExtraReducer {
  export const authModal = (
    state: IAuthState,
    action: PayloadAction<IAuthModalPayload>
  ) => {
    state.errors = {};
    state.failure = "";
    state.modalType = action.payload?.type as AuthAPIType;
    state.authModal = action.payload.isOpen;
  };
  export const authPending = (state: IAuthState) => {
    state.status = "loading";
  };
  export const authFulfill = (
    state: IAuthState,
    action: PayloadAction<IAuthSuccessResponse>
  ) => {
    state.status = "succeeded";

    state.authModal = !action.payload.success;

    if (!action.payload.success) {
      if (action.payload.message) {
        state.errors = {};

        state.failure = action.payload.message;
      } else {
        state.failure = "";

        state.errors = action.payload.errors;
      }
    } else {
      state.isAuth = true;
      if (action.payload.user) {
        state.user = action.payload.user;
        setSessionValue("token", action.payload.token);
        setSessionValue("userId", action.payload.user._id);
        setSessionValue("role", action.payload.user.role);
      }
    }
  };

  export const authFailure = (state: IAuthState, action: any) => {
    state.status = "failed";
    state.failure =
      (action.error as SerializedError).message || "Something went wrong.";
  };

  export const forgotPasswordPending = () => {};
  export const forgotPasswordFulfill = () => {};
  export const forgotPasswordFailure = () => {};
}

export default AuthExtraReducer;
