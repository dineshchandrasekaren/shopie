import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
const testSlice = createSlice({
  name: "test",
  initialState: { AlertModalMsg: "", SuccessModalMsg: "" },
  reducers: {
    openAlert(state, action: PayloadAction<string>) {
      state.AlertModalMsg = action.payload;
    },
    openSuccess(state, action: PayloadAction<string>) {
      state.SuccessModalMsg = action.payload;
    },
  },
});

export const { openAlert, openSuccess } = testSlice.actions;
export default testSlice.reducer;
