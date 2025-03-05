import { useRecipeStore } from './recipeStore';
import { useParams, Link } from 'react-router-dom';

const RecipeDetails = () => {
    const { recipeId } = useParams();
    const recipe = useRecipeStore(state => state.recipes.find(r => r.id === parseInt(recipeId)));

    if (!recipe) return <p>Recipe not found</p>;

    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            <Link to={`/edit/${recipe.id}`}>Edit Recipe</Link>
            <Link to="/">Back to Recipes</Link>
        </div>
    );
};

export default RecipeDetails;
