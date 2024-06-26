import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPosts } from "../../fetches";

const initialState = {
  posts: [],
  currentPage: 1,
  totalPages: 1,
  locale: "",
  status: "idle",
  error: null,
};

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (pageNum) => getPosts(pageNum)
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setLoading: (state) => {
      state.status = "loading";
      state.error = null;
      state.posts = [];
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.totalPages = action.payload.data.meta.pagination.pageCount;
        state.locale = action.payload.data.data[0]?.attributes.locale;
        state.posts = action.payload.data.data;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setPage, setLoading, setPosts } = postsSlice.actions;

export default postsSlice.reducer;
