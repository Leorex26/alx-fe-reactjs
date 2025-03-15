import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const { recipes, searchTerm, setSearchTerm } = useRecipeStore((state) => ({
    recipes: state.recipes,
    searchTerm: state.searchTerm,
    setSearchTerm: state.setSearchTerm,
  }));

  // Filter recipes based on search term
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Recipe List</h2>
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredRecipes.length === 0 ? (
        <p>No matching recipes found.</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
