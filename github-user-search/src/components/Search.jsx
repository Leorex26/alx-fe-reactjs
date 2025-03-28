import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      setError("Looks like we can't find the user");
    }

    setLoading(false);
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border rounded-md w-full"
        />
        <button
          type="submit"
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {user && (
        <div className="border p-4 rounded-md">
          <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
          <h2 className="text-lg font-bold">{user.login}</h2>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
