import { useState } from "react";
import { fetchUserData } from "../services/githubService";
import axios from "axios";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUserData(null);
    setUsers([]);
    

    try {
        const data = await fetchAdvancedUsers(username, location, minRepos);
        if (data.length > 0) {
          setUsers(data);
        } else {
          setError("Looks like we cant find the user");
        }
      } catch (err) {
        setError("Error fetching data. Please try again.");
      }
      setLoading(false);
    };
  
    return (
      <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-xl font-bold text-center mb-4">GitHub User Search</h1>
        <form onSubmit={handleSearch} className="space-y-4">
          <input
            type="text"
            placeholder="Username (optional)"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Location (optional)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Min Repositories (optional)"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Search
          </button>
        </form>
  
        {loading && <p className="text-center text-gray-500 mt-4">Loading...</p>}
        {error && <p className="text-center text-red-500 mt-4">{error}</p>}
  
        <div className="mt-6">
          {users.map((user) => (
            <div key={user.id} className="p-4 bg-white shadow rounded-lg mb-4">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full mx-auto"
              />
              <h3 className="text-center font-semibold">{user.login}</h3>
              <p className="text-center text-sm text-gray-600">
                {user.location || "No location available"}
              </p>
              <p className="text-center text-sm text-gray-600">
                Public Repos: {user.public_repos || "N/A"}
              </p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-blue-500 mt-2"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Search;