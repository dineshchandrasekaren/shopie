import { createAsyncThunk } from "@reduxjs/toolkit";
import { IShopDetails } from "../../types/user.type";
import userApi from "../../api/user.api";
import errorHandler from "../access-denied.handler";

export const saveShopDetails = createAsyncThunk(
  "user/shopDetails",
  async (payload: IShopDetails, thunkAPI) => {
    try {
      const { data } = await userApi.saveShopDetails(payload);

      return data;
    } catch (error: any) {
      return errorHandler(
        error.response.data.message === "Access denied" ||
          error.response.data.message === "jwt expired",
        error,
        thunkAPI
      );
    }
  }
);
