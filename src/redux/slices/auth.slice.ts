import { createAction, createSlice } from "@reduxjs/toolkit";
import { auth, forgotPassword } from "../thunk-action/auth.thunk-action";
import AuthExtraReducer from "../extra-reducer/auth.extra-reducer";

export const openAuthModal = createAction(
  "auth/openAuthModal",
  (isOpen: boolean, type: string = "") => {
    return {
      payload: {
        isOpen,
        type,
      },
    };
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "",
    failure: "",
    errors: {},
    authModal: false,
    modalType: "",
    isAuth: false,
    user: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(openAuthModal, AuthExtraReducer.authModal)
      .addCase(auth.pending, AuthExtraReducer.authPending)
      .addCase(auth.fulfilled, AuthExtraReducer.authFulfill)
      .addCase(auth.rejected, AuthExtraReducer.authFailure)
      .addCase(forgotPassword.pending, AuthExtraReducer.forgotPasswordPending)
      .addCase(forgotPassword.fulfilled, AuthExtraReducer.forgotPasswordFulfill)
      .addCase(forgotPassword.rejected, AuthExtraReducer.forgotPasswordFailure);
  },
});

// export const {  } = authSlice.actions;
export default authSlice.reducer;
