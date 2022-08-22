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
                console.log("data errors inside food fetch:", data.errors)}
            else {
            setIngredients(data)
            console.log("ingredients:", ingredients)
        }})
        .catch(err => alert(err))
        },[])



    const recipeArray = ingredients.map((ingredient => {
        console.log("ingredient",ingredient)
        return (
            <div>
            <h1>My {ingredient.food.name} Recipes</h1>
            <h4 key={ingredient.id}>
                <Link to={`/recipes/${ingredient.recipe.id}`}>
                    {ingredient.recipe.title}
                </Link>
            </h4>
            </div>)
    }))


  return (
    <HomeContainer>
      {recipeArray}
    </HomeContainer>
  )
}

export default FoodRecipes
