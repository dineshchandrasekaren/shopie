import { PayloadAction } from "@reduxjs/toolkit";
import { IShopDetails, IUserState } from "../../types/user.type";
import { ICommonError } from "../../types/common.type";
import useSession from "../../hooks/useSession";

export function saveShopDetailsPending(state: IUserState) {
  state.loading = true;
}

export function saveShopDetailsFulfill(
  state: IUserState,
  action: PayloadAction<{ user: IShopDetails }>
) {
  state.user = action.payload.user;
  useSession().setSessionValue("lg", action.payload.user.logo);
  state.loading = false;
}

export function saveShopDetailsFailure(
  state: IUserState,
  action: PayloadAction<ICommonError>
) {
  console.log(action);

  state.message = action.payload.error.message || "Something went wrong.";
  state.loading = false;
}
