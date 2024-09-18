import { createSlice } from "@reduxjs/toolkit";
import { saveShopDetails } from "../thunk-action/user.thunk-action";
import initialState from "../initial-state";
import {
  saveShopDetailsFailure,
  saveShopDetailsFulfill,
  saveShopDetailsPending,
} from "../extra-reducer/user.extra-reducer";

const userSlice = createSlice({
  name: "user",
  initialState: initialState.userReducer,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(saveShopDetails.pending, saveShopDetailsPending)
      .addCase(saveShopDetails.fulfilled, saveShopDetailsFulfill)
      .addCase(saveShopDetails.rejected, saveShopDetailsFailure);
  },
});

export default userSlice.reducer;
