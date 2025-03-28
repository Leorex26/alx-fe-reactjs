import axios from "axios";

const BASE_URL = "https://api.github.com/search/users";

export const fetchUsers = async (username, location, minRepos) => {
  let query = "";

  if (username) query += `${username}+in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos} `;

  try {
    const response = await axios.get(`${BASE_URL}?q=${query.trim()}&per_page=10`);
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
