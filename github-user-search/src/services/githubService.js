import axios from "axios";

const BASE_URL = "https://api.github.com";
const API_URL = "https://api.github.com/search/users?q";


const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error("User not found");
  }
};

export const fetchAdvancedUsers = async (query, location, minRepos) => {
  try {
    let searchQuery = `${query} in:login`;

    if (location) {
      searchQuery += ` location:${location}`;
    }
    if (minRepos) {
      searchQuery += ` repos:>${minRepos}`;
    }

    const response = await axios.get(`${API_URL}${query}`);

    return response.data.items; // GitHub returns users inside 'items' array
  } 
  
  catch (error) {
    throw new Error("Failed to fetch users");
  }
};

