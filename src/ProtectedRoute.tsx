import React from "react";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  redirectTo: string;
  loggedIn: boolean;
  children: JSX.Element;
};

const ProtectedRoute = ({
  redirectTo,
  loggedIn,
  children
}: ProtectedRouteProps) => {
  return loggedIn ? children : <Navigate to={redirectTo} />;
};

export default ProtectedRoute;
