import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import initialState from "../initial-state";
const commonSlice = createSlice({
  name: "common",
  initialState: initialState.commonReducer,
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
