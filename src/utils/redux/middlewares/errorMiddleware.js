import { logout } from "@slices/userSlice";

const errorMiddleware = (store) => (next) => (action) => {
  if (action.error?.message.includes("401")) {
    store.dispatch(logout());
  } else{
    return next(action);
  }
};

export default errorMiddleware;
