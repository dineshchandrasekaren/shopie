import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { auth } from "../../api/auth.api";
interface initialState {
  status: string;
  failure: string;
  error: {};
  authModal: boolean;
  modalType: string;
}
interface successAction {
  success: boolean;
  message: string;
  errors: { [key: string]: string };
}

interface modalPayload {
  isOpen: boolean;
  type?: string;
}
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
    error: {},
    authModal: false,
    modalType: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(auth.pending, (state: initialState) => {
        state.status = "loading";
      })
      .addCase(
        auth.fulfilled,
        (state: initialState, action: PayloadAction<successAction>) => {
          state.status = "succeeded";

          state.authModal = !action.payload.success;

          if (!action.payload.success) {
            if (action.payload.message) {
              state.error = {};

              state.failure = action.payload.message;
            } else {
              state.failure = "";

              state.error = action.payload.errors;
            }
          }
        }
      )
      .addCase(auth.rejected, (state: initialState, action) => {
        state.status = "failed";
        state.failure = action.error.message as string;
      })
      .addCase(openAuthModal, (state, action: PayloadAction<modalPayload>) => {
        state.authModal = action.payload.isOpen;
        state.modalType = action.payload?.type || "";
        state.error = {};
        state.failure = "";
      });
  },
});

// export const {  } = authSlice.actions;
export default authSlice.reducer;
