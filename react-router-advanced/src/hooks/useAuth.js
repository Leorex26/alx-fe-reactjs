const useAuth = () => {
    // Simulated authentication check (Replace with real auth logic)
    return localStorage.getItem("auth") === "true"; // Example: Using localStorage for auth state
  };
  
  export default useAuth;
  