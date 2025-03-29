import axios from "axios";

export const fetchAdvancedUsers = async (username, location, minRepos) => {
  let query = [];

  if (username) query.push(`user:${username}`);
  if (location) query.push(`location:${location}`);
  if (minRepos) query.push(`repos:>${minRepos}`);

  const queryString = query.join("+");
  const url = `https://api.github.com/search/users?q=${queryString}`;

  try {
    const response = await axios.get(url);
    return response.data.items || [];
  } catch (error) {
    console.error("API fetch error:", error);
    return [];
  }
};
