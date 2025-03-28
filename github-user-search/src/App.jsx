import { useState } from "react";
import Search from "./components/Search";
import { fetchUserData } from "./services/githubService";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (username) => {
    setLoading(true);
    setError("");
    setUser(null);
    try {
      const userData = await fetchUserData(username);
      setUser(userData);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="app">
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>Looks like we can't find the user</p>}
      {user && (
        <div className="user-card">
          <img src={user.avatar_url} alt={user.login} />
          <h2>{user.name || user.login}</h2>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-500">GitHub User Search</h1>
    </div>
  );
}

