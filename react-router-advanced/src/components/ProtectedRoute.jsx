import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
  // Simulating authentication check
  return localStorage.getItem("user") ? true : false;
};

const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
