import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPost } from "../../fetches";

const initialState = {
  post: {},
  linkId: 0,
  status: "idle",
  error: null,
};

export const fetchPost = createAsyncThunk(
  "post/fetchPost",
  async (postId, { dispatch }) => {
    dispatch(setLinkId(postId));
    return getPost(postId);
  }
);

// Create a slice
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setLinkId: (state, action) => {
      state.linkId = action.payload;
    },
    setLoading: (state) => {
      state.status = "loading";
      state.post = {};
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPost.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.post = action.payload.data.data.attributes;
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setLinkId, setLoading } = postSlice.actions;

export default postSlice.reducer;
