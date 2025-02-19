import React from "react";
import { Navigate } from "react-router-dom";

// A wrapper for protected routes
const PrivateRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem("token"); // Check if token exists in localStorage

  // If not authenticated, redirect to login page
  return isAuthenticated ? element : <Navigate to="/admin" />;
};

export default PrivateRoute;
