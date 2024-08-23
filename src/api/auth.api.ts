import { createAsyncThunk } from "@reduxjs/toolkit";
import http from ".";
import { openSuccess } from "../store/slices/common.slice";
import { RootState } from "../store";

interface shopSignupPayload {
  email: FormDataEntryValue | null;
  username: FormDataEntryValue | null;
  name: FormDataEntryValue | null;
  role: string;
}
// Async thunk for fetching users with access to global state

export const auth = createAsyncThunk(
  "user/shopSignup",
  async (payload: shopSignupPayload, thunkAPI) => {
    try {
      const store: RootState = thunkAPI.getState() as RootState;
      const modalType = store.authReducer.modalType;
      const response = await http.post(`/auth/${modalType}`, payload);
      const data = response.data;
      if (data.success) {
        thunkAPI.dispatch(openSuccess(data.email));
      }
      return data;
    } catch (error: any) {
      // Optionally handle the error and return a rejection with a specific value
      return thunkAPI.rejectWithValue(error.response?.data || "Signup failed");
    }
  }
);
