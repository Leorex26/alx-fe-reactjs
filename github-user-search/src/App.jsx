import React from "react";
import { useState } from "react";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";
import { fetchUserData } from "./services/githubService";

export default function App() {
  const [users, setUsers] = useState([]);

  const handleSearch = async (searchParams) => {
    const data = await fetchUserData(searchParams);
    setUsers(data);
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-100">
      <Search onSearch={handleSearch} />
      <SearchResults users={users} />
    </div>
  );
}
