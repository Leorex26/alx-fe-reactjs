import axios from "axios";

const BASE_URL = "https://api.github.com";

export const fetchUserData = async ({ username, location, repos }) => {
  try {
    let query = `q=${username}`;
    if (location) query += `+location:${location}`;
    if (repos) query += `+repos:>${repos}`;

    const response = await axios.get(`https://api.github.com/search/users?${query}`);
    return response.data.items; // Return the list of users
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
