import { createAsyncThunk } from "@reduxjs/toolkit";
import { openAlert, openSuccess } from "../slices/common.slice";
import { RootState } from "..";
import ERROR_MESSAGES from "../../constants/error-message.constant";
import { AuthAPIType, IAuthPayload } from "../../types/auth.type";
import AuthApi from "../../api/auth.api";
import useSession from "../../hooks/useSession";
import errorHandler from "../access-denied.handler";

export const authAPIAction = createAsyncThunk(
  "auth/all",
  async (payload: IAuthPayload, { getState, dispatch, rejectWithValue }) => {
    try {
      const modalType = (getState() as RootState).authReducer
        .modalType as AuthAPIType;
      const { data } = await AuthApi.authenticate(payload, modalType);

      if (data.success) {
        if (data.email) {
          dispatch(openSuccess(data.email));
        } else if (modalType === "login") {
          window.location.reload();
        }
      }

      return data;
    } catch (error: any) {
      return rejectWithValue({
        error: error.response?.data || ERROR_MESSAGES.FAILED.auth,
      });
    }
  }
);

export const logout = createAsyncThunk("auth/exit", async (_, { dispatch }) => {
  try {
    const { data } = await AuthApi.authenticate();

    if (!data.success) {
      dispatch(openAlert(data.message));
    } else {
      useSession().clearSession(true);
    }

    return data;
  } catch (error: any) {
    errorHandler(
      error.response.data.message === "Access denied" ||
        error.response.data.message === "jwt expired"
    );

    dispatch(openAlert(error.response?.message || "Logout failed, try again"));
  }
});
