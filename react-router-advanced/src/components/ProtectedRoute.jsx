import { Navigate } from "react-router-dom";

// Simulated authentication check (replace with actual auth logic)
const isAuthenticated = () => {
  return localStorage.getItem("auth") === "true"; // Example: Store auth status in localStorage
};

const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/" replace />;
};

export default ProtectedRoute;
