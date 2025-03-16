import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/data.json') // Ensure the data.json file is in the public folder
      .then(response => response.json())
      .then(data => setRecipes(data));
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map(recipe => (
          <div key={recipe.id} className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition">
            <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover rounded-md" />
            <h2 className="text-xl font-semibold text-blue-800 mt-4">{recipe.title}</h2>
            <p className="text-gray-600">{recipe.summary}</p>
            <Link to={`/recipe/${recipe.id}`} className="text-blue-500 mt-2 inline-block">View Recipe</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
