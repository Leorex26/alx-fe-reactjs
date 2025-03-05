import { useState } from 'react';
import { useRecipeStore } from './recipeStore';
import { useParams, useNavigate } from 'react-router-dom';

const EditRecipeForm = () => {
    const { recipeId } = useParams();
    const navigate = useNavigate();
    const { recipes, updateRecipe } = useRecipeStore();

    const recipe = recipes.find(r => r.id === parseInt(recipeId));

    const [title, setTitle] = useState(recipe?.title || '');
    const [description, setDescription] = useState(recipe?.description || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        updateRecipe({ id: recipe.id, title, description });
        navigate(`/recipe/${recipe.id}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
            <button type="submit">Update Recipe</button>
        </form>
    );
};

export default EditRecipeForm;
