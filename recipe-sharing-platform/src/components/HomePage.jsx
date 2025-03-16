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
    <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
      Recipe Sharing Platform
    </h1>
    <div className="text-center mb-6">
      <Link
        to="/add-recipe"
        className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
      >
        Add a New Recipe
      </Link>
    </div>
    {/* Recipe Cards */}
    {/* ... */}
  </div>
);
}

export default HomePage;
