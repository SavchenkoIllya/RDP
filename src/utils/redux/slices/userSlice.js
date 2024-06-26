import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { tgAuth } from "../../fetches";

const initialState = {
  token: "",
  status: "idle",
  error: null,
};

const storedToken = localStorage.getItem("token");
if (storedToken) {
  initialState.token = storedToken;
}

export const fetchUser = createAsyncThunk("user/fetchUser", async (response) =>
  tgAuth(response)
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = "";
      localStorage.clear();
      sessionStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        if (!state.token) {
          localStorage.setItem("token", action.payload.data.jwt);
          state.token = action.payload.data.jwt;
        }
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
