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
import {BrowserRouter, Navigate, Route, Routes, useNavigate} from "react-router-dom"
import { UserProvider } from './context/user';
import { useState } from 'react';

function App() {
  const [ foodSubmitted, setFoodSubmitted ] = useState ("")
  const navigate = useNavigate()
  const [ homeSearchedFoods, setSearchedFoods ] = useState([])

  const handleFoodSubmit =(searchInput) => {
    // e.preventDefault();
    setFoodSubmitted(searchInput)
    console.log(foodSubmitted)
    const lowerCaseSearch = searchInput.toLowerCase()
    console.log("lowerCaseSearch:", lowerCaseSearch)
    fetch ("/foodsearch", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            search: lowerCaseSearch
        })
        })
        .then(response => response.json())
        .then(data => {
            if (data.errors){
                console.log(data.errors)
            } else {
            console.log("fetched:", data)
            setSearchedFoods(data)
            console.log("searched food inside fetch:", homeSearchedFoods)
            renderFoodContainer()
            
        }
        })
    
}

const renderFoodContainer = () => {
  navigate("/foods")
}



  return (
    <div className="App">
      <UserProvider>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home handleFoodSubmit={handleFoodSubmit}/>} />
          <Route path="/foods" element={<FoodContainer homeSearchedFoods={homeSearchedFoods}/>} />
          <Route path="/foods/:id" element={<FoodDetail />} />
          {/* <Route path="/foods/:search" element={<FoodContainer />} /> */}
          <Route path="foods/:id/recipes" element={<FoodRecipes />} />
          <Route path="/myrecipes" element={<RecipeList />} />
          <Route path="/recipes/new" element={<RecipeForm />} />
          <Route path="/recipes/edit/:id" element={<RecipeEditForm />} />
          <Route path="/recipes/:id" element={<Recipe />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;