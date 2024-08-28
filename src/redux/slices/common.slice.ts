import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
const commonSlice = createSlice({
  name: "common",
  initialState: { AlertModalMsg: "", SuccessModalMsg: "" },
  reducers: {
    openAlert(state, action: PayloadAction<string>) {
      state.AlertModalMsg = action.payload;
    },
    openSuccess(state, action: PayloadAction<string>) {
      state.SuccessModalMsg = action.payload;
    },
    closeAllModal(state) {
      state.SuccessModalMsg = "";
      state.AlertModalMsg = "";
    },
  },
});

export const { openAlert, openSuccess, closeAllModal } = commonSlice.actions;
export default commonSlice.reducer;
