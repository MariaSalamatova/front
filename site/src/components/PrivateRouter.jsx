import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AutthContext";

function PrivateRouter({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default PrivateRouter;
