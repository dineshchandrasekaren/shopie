import { PayloadAction, SerializedError } from "@reduxjs/toolkit";
import {
  IAuthState,
  IAuthModalPayload,
  IAuthSuccessResponse,
} from "../../types/auth.type";
import useSession from "../../hooks/useSession";
const { setSessionValue } = useSession();

export function authModal(
  state: IAuthState,
  action: PayloadAction<IAuthModalPayload>
) {
  state.errors = {};
  state.failure = "";
  state.authModal = action.payload.isOpen;
}

export function authPending(state: IAuthState) {
  state.status = "loading";
}

export function authFulfill(
  state: IAuthState,
  action: PayloadAction<IAuthSuccessResponse>
) {
  const { success, message, errors, user, setup, token } = action.payload;
  state.status = "succeeded";
  state.authModal = !success;

  if (success) {
    state.isAuth = true;
    if (user) {
      setSessionValue("setup", setup);
      setSessionValue("token", token);
      setSessionValue("userId", user._id);
      setSessionValue("role", user.role);
      setSessionValue("name", user.name);

      state.user = user;
    }
  } else {
    state.failure = message || "";
    state.errors = message ? {} : errors;
  }
}

export function authFailure(state: IAuthState, action: any) {
  state.status = "failed";
  state.failure =
    (action.error as SerializedError).message || "Something went wrong.";
}

export function updateAuthModalType(state: IAuthState, action: any) {
  state.modalType = action.payload.type;
}
