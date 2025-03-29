import axios from "axios";

// Fetch user data by username (Basic Search)
export const fetchUserData = async (username) => {
  const url = `https://api.github.com/users/${username}`;

  try {
    const response = await axios.get(url);
    return response.data; // Returns a single user object
  } catch (error) {
    console.error("API fetch error:", error);
    return null; // Return null if the user is not found
  }
};

// Fetch multiple users based on search filters (Advanced Search)
export const fetchAdvancedUsers = async (username, location, minRepos, page = 1) => {
  let query = [];

  if (username) query.push(`user:${username}`);
  if (location) query.push(`location:${location}`);
  if (minRepos) query.push(`repos:>${minRepos}`);

  const queryString = query.join("+");
  const url = `https://api.github.com/search/users?q=${queryString}&page=${page}&per_page=10`;

  try {
    const response = await axios.get(url);
    return response.data.items || []; // Returns an array of users
  } catch (error) {
    console.error("API fetch error:", error);
    return [];
  }
};
