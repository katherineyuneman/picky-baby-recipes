import React, { useState, useEffect, useContext } from 'react'
import RecipeList from '../components/recipes/RecipeList';
import { UserContext } from '../context/user';
import { HomeContainer } from '../styled-components/styleIndex';
import { Link } from 'react-router-dom';

function RecipeContainer() {
    const [recipes, setRecipes] = useState([]);
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
            console.log(data)
          }
      })
    }, []);

    console.log(recipes)


    if (recipes.length === 0 && loggedIn === false){
      return (
        <HomeContainer>
          <h1>Not Authorized.  Please <Link to="/login" className='link'> login </Link> or <Link to="/signup" className='link'> sign up </Link>!</h1>
        </HomeContainer>)
    } else {
      return (
        <HomeContainer>
          <div>
          {errors ? <h1>{errors}</h1>: null }
          <h1>{user.first_name}'s Recipes </h1>
          <RecipeList setRecipes={setRecipes} recipes={recipes}/>
          </div>
        </HomeContainer>
        )
    }

    // if (recipes.length > 0 && loggedIn === true) {
    //   return (
    //   <HomeContainer>
    //     <div>
    //     {errors ? <h1>{errors}</h1>: null }
    //     <h1>{user.first_name}'s Recipes </h1>
    //     {eachRecipe}
    //     </div>
    //   </HomeContainer>
    //   )
    // } else {
    //   return (
    //     <HomeContainer>
    //       <h1>Not Authorized.  Please <Link to="/login" className='link'> login </Link> or <Link to="/signup" className='link'> sign up </Link>!</h1>
    //     </HomeContainer>)
    //   }
}

export default RecipeContainer
