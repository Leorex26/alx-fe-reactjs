import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch('/data.json') // Ensure the data.json file is in the public folder
      .then(response => response.json())
      .then(data => {
        const foundRecipe = data.find(item => item.id === parseInt(id));
        setRecipe(foundRecipe);
      });
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-gray-500">Loading recipe details...</p>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-md" />
      <h1 className="text-3xl font-bold text-blue-800 mt-4">{recipe.title}</h1>
      <p className="text-gray-600 my-4">{recipe.summary}</p>
      <h2 className="text-xl font-semibold text-blue-700 mt-4">Ingredients</h2>
      <ul className="list-disc list-inside text-gray-600">
        {recipe.ingredients?.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold text-blue-700 mt-4">Instructions</h2>
      <p className="text-gray-600">{recipe.instructions}</p>
      <Link to="/" className="text-blue-500 mt-4 inline-block">Back to Home</Link>
    </div>
  );
}

export default RecipeDetail;
