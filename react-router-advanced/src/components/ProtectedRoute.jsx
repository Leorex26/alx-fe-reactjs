import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
  return localStorage.getItem("auth") === "true"; // Simulating authentication
};

const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
