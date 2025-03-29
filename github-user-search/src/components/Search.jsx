import { useState } from "react";
import { fetchUserData } from "../services/githubService";


const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [location, setLocation] = useState("");
  const [repos, setRepos] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUser(null);
  
    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

    return (
        <div className="p-6 bg-white rounded-md shadow-md max-w-md mx-auto">
          <h2 className="text-xl font-bold text-center mb-4">GitHub User Search</h2>
    
          <form onSubmit={handleSearch} className="space-y-4">
            <input
              type="text"
              placeholder="Enter GitHub Username"
              className="w-full p-2 border rounded-md"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
    
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
              disabled={loading}
            >
              {loading ? "Loading..." : "Search"}
            </button>
          </form>
    
          {/* Display Error Message */}
          {error && <p className="text-red-500">Looks like we can't find the user</p>}

    
          {/* Display Users List */}
          {users.length > 0 && (
            <div className="mt-6">
              {users.map((user) => (
                <div key={user.id} className="p-4 border rounded-lg flex items-center space-x-4">
                  <img src={user.avatar_url} alt="Avatar" className="w-16 h-16 rounded-full" />
                  <div>
                    <h3 className="text-lg font-bold">{user.login}</h3>
                    <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                      View Profile
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }