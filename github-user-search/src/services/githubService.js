import axios from "axios";

const BASE_URL = "https://api.github.com";

// Fetch single user data
export const fetchUserData = async (username) => {
  try {
    let query = `q=${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>${minRepos}`;

    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};

// Fetch users with advanced search (location, repos)
export const fetchUsers = async (username, location, minRepos) => {
  let query = "";

  if (username) query += `${username}+in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos} `;

  try {
    const response = await axios.get(
      `${BASE_URL}/search/users?q=${query.trim()}&per_page=10`
    );
    const users = await Promise.all(
      response.data.items.map(async (user) => {
        const userDetails = await axios.get(user.url);
        return userDetails.data;
      })
    );
    return users;
  } catch (error) {
    throw new Error("Error fetching users");
  }
};
