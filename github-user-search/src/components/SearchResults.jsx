export default function SearchResults({ users }) {
    if (!users.length) return <p className="text-center text-gray-500">No results found.</p>;
  
    return (
        <div className="mt-6">
          {users.length > 0 ? (
            users.map((user) => (
              <div key={user.id} className="p-4 border rounded-lg mb-4 flex items-center space-x-4">
                <img src={user.avatar_url} alt="Avatar" className="w-16 h-16 rounded-full" />
                <div>
                  <h3 className="text-lg font-bold">{user.login}</h3>
                  <p>Location: {user.location || "N/A"}</p>
                  <p>Repositories: {user.public_repos || "N/A"}</p>
                  <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                    View Profile
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">Looks like we can't find the user.</p>
          )}
        </div>
      );
    }