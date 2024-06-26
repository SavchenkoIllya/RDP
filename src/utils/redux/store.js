import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";
import walletsReducer from "./slices/walletsSlice";
import aboutReducer from "./slices/aboutSlice";
import postsReducer from "./slices/postsSlice";
import postReducer from "./slices/postSlice";

import errorMiddleware from "./middlewares/errorMiddleware";

export const store = configureStore({
  reducer: {
    user: userReducer,
    wallets: walletsReducer,
    about: aboutReducer,
    posts: postsReducer,
    post: postReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      errorMiddleware
    ),
});
