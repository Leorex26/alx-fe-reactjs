import { useState } from "react";

function AddRecipeForm() {
  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  // Validate form inputs
  const validateForm = () => {
    let newErrors = {};
    if (!recipe.title.trim()) newErrors.title = "Title is required.";
    if (!recipe.ingredients.trim()) newErrors.ingredients = "Ingredients are required.";
    if (!recipe.steps.trim()) newErrors.steps = "Steps are required.";
    if (recipe.ingredients.split(",").length < 2)
      newErrors.ingredients = "At least two ingredients required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    console.log("New Recipe Submitted:", recipe);

    // Reset form after submission
    setRecipe({ title: "", ingredients: "", steps: "" });
    setErrors({});
    alert("Recipe added successfully!");
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Recipe Title */}
        <div>
          <label className="block text-gray-700 font-medium">Recipe Title:</label>
          <input
            type="text"
            name="title"
            value={recipe.title}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-gray-700 font-medium">Ingredients (comma-separated):</label>
          <textarea
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
            rows="3"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </div>

        {/* Preparation Steps */}
        <div>
          <label className="block text-gray-700 font-medium">Preparation Steps:</label>
          <textarea
            name="steps"
            value={recipe.steps}
            onChange={handleChange}
            rows="4"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
