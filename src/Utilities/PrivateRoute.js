import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ isLoggedIn, redirecto, children }) => {
  console.log(isLoggedIn);
  if (isLoggedIn === false) {
    return <Navigate to={redirecto} replace />;
  }
  return children ? children : <Outlet />;
};

export default PrivateRoute;
