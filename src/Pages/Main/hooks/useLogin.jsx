import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "@slices/userSlice";

export const useLogin = () => {
  const { token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const logInTelegram = (data) => dispatch(fetchUser(data));

  return { token, logInTelegram };
};
