import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Login from './Login';
import Signup from './Signup';
import RecipeList from './components/recipes/RecipeList';
import RecipeForm from './components/recipes/recipe_forms/RecipeForm';
import RecipeEditForm from './components/recipes/recipe_forms/RecipeEditForm';
import FoodContainer from './containers/FoodContainer';
import Recipe from './components/recipes/Recipe';
import FoodRecipes from './components/FoodRecipes';
import FoodDetail from './components/food/FoodDetail';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { UserProvider } from './context/user';

function App() {


  return (
    <div className="App">
      <UserProvider>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foodlist" element={<FoodContainer />} />
          <Route path="/foodlist/:search" element={<FoodContainer />} />
          <Route path="foods/:id/recipes" element={<FoodRecipes />} />
          <Route path="/myrecipes" element={<RecipeList />} />
          <Route path="/recipes/new" element={<RecipeForm />} />
          <Route path="/recipes/edit/:id" element={<RecipeEditForm />} />
          <Route path="/recipes/:id" element={<Recipe />} />
          <Route path="/foods/:id" element={<FoodDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
        </Routes>
      </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;