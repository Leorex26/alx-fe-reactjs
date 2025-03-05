import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing Application</h1>
        <SearchBar />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
          <Route path="/add-recipe" element={<AddRecipeForm />} />  {/* Add this route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
