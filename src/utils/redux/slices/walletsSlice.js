// src/features/postsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getWallets } from "../../fetches";

// Define the initial state
const initialState = {
  wallets: [],
  status: "idle",
  error: null,
};

const storedWallets = localStorage.getItem("wallets");
if (storedWallets) {
  initialState.wallets = JSON.parse(storedWallets);
}

// Define an async thunk for fetching posts
export const fetchWallets = createAsyncThunk("wallets/fetchWallets", async () =>
  getWallets()
);

// Create a slice
const walletSlice = createSlice({
  name: "wallets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWallets.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWallets.fulfilled, (state, action) => {
        state.status = "succeeded";
        localStorage.setItem(
          "wallets",
          JSON.stringify(action.payload.data.data)
        );
        state.wallets = action.payload.data.data;
      })
      .addCase(fetchWallets.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default walletSlice.reducer;
