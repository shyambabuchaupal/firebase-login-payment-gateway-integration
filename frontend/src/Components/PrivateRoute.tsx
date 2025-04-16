import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

interface Props {
  children: ReactNode;
}

const PrivateRoute = ({ children }: Props) => {
  const auth = getAuth();
  const user = auth.currentUser;

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
