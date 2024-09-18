import { createSlice } from "@reduxjs/toolkit";
import { authAPIAction } from "../thunk-action/auth.thunk-action";
import AuthActions from "../action/auth.action";
import { IAuthState } from "../../types/auth.type";
import {
  authFailure,
  authFulfill,
  authModal,
  authPending,
  updateAuthModalType,
} from "../extra-reducer/auth.extra-reducer";
import initialState from "../initial-state";
// const initialState: IAuthState = {
//   status: "",
//   failure: "",
//   errors: {},
//   authModal: false,
//   modalType: "",
//   isAuth: false,
//   user: {},
// };
const authSlice = createSlice({
  name: "auth",
  initialState: initialState.authReducer as IAuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authAPIAction.pending, authPending)
      .addCase(authAPIAction.fulfilled, authFulfill)
      .addCase(authAPIAction.rejected, authFailure);
    builder.addCase(AuthActions.openAuthModal, authModal);
    builder.addCase(AuthActions.updateModalType, updateAuthModalType);
  },
});

// export const {  } = authSlice.actions;
export default authSlice.reducer;
