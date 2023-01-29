import React, { useState, useEffect, useContext } from 'react'
import RecipeList from '../components/recipes/RecipeList';
import { UserContext } from '../context/user';
import { HomeContainer, SearchStyle } from '../styled-components/styleIndex';
import { Link } from 'react-router-dom';

function RecipeContainer() {
    const [recipes, setRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([])
    const [searchInputs, setSearchInputs] = useState("")
    const { user, loggedIn } = useContext(UserContext)
    const [ errors, setErrors ] = useState([])

    useEffect(() => {
      fetch("/recipes")
        .then((r) => r.json())
        .then((data) => {
          if (data.errors){
            console.log(data.errors)
              setErrors(data.errors)
          } else {
            setRecipes(data)
            setFilteredRecipes(data)
            console.log(data)
          }
      })
    }, []);

    const handleSearchInputs = (e) => {
      console.log(e.target.value)
      setSearchInputs(e.target.value)
    }

    const handleSearchSubmit = (e) => {
      e.preventDefault();
        const searchedRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(searchInputs.toLowerCase()) )
        setFilteredRecipes(searchedRecipes)
      }

    const handleResetSearch = (e) => {
      setFilteredRecipes(recipes)
      setSearchInputs("")
    }


    if (errors && loggedIn === false){
      return (
        <HomeContainer>
          <h1>Not Authorized.  Please <Link to="/login" className='link'> login </Link> or <Link to="/signup" className='link'> sign up </Link>!</h1>
        </HomeContainer>)
    } else {
      return (
        <HomeContainer>
          <SearchStyle>
            <form onSubmit={handleSearchSubmit}>
              <input type="text" value={searchInputs} onChange={handleSearchInputs}/>
              <button>Search Recipes</button>
            </form>
            <button onClick={handleResetSearch}>See all food</button>
          </SearchStyle>
            {errors ? <h1>{errors}</h1>: null }
            <h1>{user.first_name}'s Recipes </h1>
            <RecipeList setRecipes={setRecipes} recipes={filteredRecipes}/>       
        </HomeContainer>

        )
        
    }

    


}

export default RecipeContainer
