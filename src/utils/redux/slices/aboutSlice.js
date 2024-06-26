import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAbout } from "../../fetches";

const initialState = {
  description: "",
  locale: "",
  status: "idle",
  error: null,
};

export const fetchAbout = createAsyncThunk(
  "about/fetchAbout",
  async () => await getAbout()
);

const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {
    setDescriptionLoading: (state) => {
      state.description = "";
      state.status = "loading";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAbout.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAbout.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.locale = action.payload.data.data?.attributes?.locale;
        state.description = action.payload.data.data?.attributes?.description;
      })
      .addCase(fetchAbout.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setDescriptionLoading } = aboutSlice.actions;

export default aboutSlice.reducer;
