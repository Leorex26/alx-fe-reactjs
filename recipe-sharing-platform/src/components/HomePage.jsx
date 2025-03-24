import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import data from "../data.json"; // Assuming data.json is in the src directory

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data.json") // Load the mock data
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>

      {/* Ensure that we map over the recipes array */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transform hover:scale-105 transition"
            >
              <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover rounded-t-lg" />
              <h2 className="text-xl font-semibold mt-2">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.summary}</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                View Recipe
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No recipes available</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
