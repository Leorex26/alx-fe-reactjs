import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from '../recipeStore';

const RecipeList = () => {
  const { filteredRecipes, recipes, searchTerm } = useRecipeStore();

  const displayedRecipes = searchTerm ? filteredRecipes : recipes;

  return (
    <div>
      {displayedRecipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          {/* Add a Link to navigate to the RecipeDetails page */}
          <Link to={`/recipe/${recipe.id}`}>View Recipe</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
