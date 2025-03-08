import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth"; // ✅ Import the authentication hook

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = useAuth(); // ✅ Check if the user is authenticated

  return isAuthenticated ? element : <Navigate to="/" replace />;
};

export default ProtectedRoute;
