import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import { HomeContainer } from '../styled-components/styleIndex';

function FoodRecipes() {
    const {id} = useParams()
    // const [ recipes, setRecipes ] = useState([])
    const [ ingredients, setIngredients ] = useState([])

    useEffect(() => {
        fetch (`/foods/${id}/recipes`)
        .then(response => response.json())
        .then(data => {
            if (data.errors){
                console.log("data errors inside food fetch:", data.errors)
            }
            else {
            setIngredients(data)
        }})
        .catch(err => alert(err))
        },[])


    const recipeArray = ingredients.map((ingredient => {
        return (
            <div key={ingredient.id}>
            <h4 key={ingredient.id}>
                <Link to={`/recipes/${ingredient.recipe.id}`}>
                    {ingredient.recipe.title}
                </Link>
            </h4>
            </div>)
    }))


  return (
    <HomeContainer>
    <h1>My Recipes</h1>
      {recipeArray}
    </HomeContainer>
  )
}

export default FoodRecipes
