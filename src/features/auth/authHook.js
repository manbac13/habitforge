import { useDispatch, useSelector } from "react-redux";
import { login, logout, register } from "./authSlice";

function useAuth() {
  const dispatch = useDispatch();

  //selector
  const loading = useSelector((state) => state.auth.loading.ui);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  //actions
  const loginAction = (payload) => dispatch(login(payload));
  const registerAction = (payload) => dispatch(register(payload));
  const logoutAction = () => dispatch(logout());

  return {
    user,
    loading,
    isAuthenticated,

    loginAction,
    logoutAction,
    registerAction,
  };
}

export default useAuth;
