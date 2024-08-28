import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../api";
import { openSuccess } from "../slices/common.slice";
import { RootState } from "..";
import settings from "../../constants/api.constant";
import ERROR_MESSAGES from "../../constants/error-message.constant";
import { AuthAPIType, IAuthPayload } from "../../types/auth.type";
import AuthApi from "../../api/auth.api";
import { ICallback } from "../../types/common.type";

export const auth = createAsyncThunk(
  "auth/all",
  async ({ next, ...payload }: IAuthPayload & ICallback, thunkAPI) => {
    try {
      const store: RootState = thunkAPI.getState() as RootState;
      const modalType = store.authReducer.modalType as AuthAPIType;

      const response = await AuthApi.authenticate(payload, modalType);
      const data = response.data;
      if (data.success) {
        thunkAPI.dispatch(openSuccess(data.email));
      }
      if (modalType === "login") {
        next();
      }
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data || ERROR_MESSAGES.FAILED.auth
      );
    }
  }
);
export const forgotPassword = createAsyncThunk(
  "auth/all",
  async (payload: { email: string }, thunkAPI) => {
    try {
      const response = await AuthApi.authenticate(payload, "forgotPassword");
      const data = response.data;
      if (data.success) {
        thunkAPI.dispatch(openSuccess(data.email));
      }

      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data || ERROR_MESSAGES.FAILED.email
      );
    }
  }
);
