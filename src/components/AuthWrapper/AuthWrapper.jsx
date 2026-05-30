import useAuth from "@/features/auth/authHook";
import { Navigate } from "react-router-dom";

const AuthWrapper = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to={"/login"} replace />;
  }

  return children;
};

export default AuthWrapper;
