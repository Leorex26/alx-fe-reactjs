import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<RecipeList />} />
                <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
                <Route path="/edit/:recipeId" element={<EditRecipeForm />} />
                <Route path="/add" element={<AddRecipeForm />} />
            </Routes>
        </Router>
    );
}

export default App;
