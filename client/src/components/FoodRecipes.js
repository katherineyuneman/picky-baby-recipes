import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';


function FoodRecipes() {

    const {id} = useParams()
    // const [ recipes, setRecipes ] = useState([])
    const [ ingredients, setIngredients ] = useState([])

    useEffect(() => {
        fetch (`/foods/${id}/recipes`)
        .then(response => response.json())
        .then(data => {
            setIngredients(data)
        })
        .catch(err => alert(err))
        },[])



    const recipeArray = ingredients.map((ingredient => {
        return (
            <h4 key={ingredient.id}>
                <Link to={`/recipes/${ingredient.recipe.id}`}>
                    {ingredient.recipe.title}
                </Link>
            </h4>)
    }))

  return (
    <div>
      {recipeArray}
    </div>
  )
}

export default FoodRecipes
