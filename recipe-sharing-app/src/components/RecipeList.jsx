import React from 'react';
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
        </div>
      ))}
    </div>
  );
};

export default RecipeList;

