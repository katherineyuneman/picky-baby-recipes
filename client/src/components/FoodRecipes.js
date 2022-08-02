import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


function FoodRecipes() {

    const {id} = useParams()
    const [ recipes, setRecipes ] = useState([])
    const [ ingredients, setIngredients ] = useState([])

    useEffect(() => {
        fetch (`/recipes/foods/${id}`)
        .then(response => response.json())
        .then(data => {
            setRecipes(data)
            setIngredients(data.ingredients)
        })
        .catch(err => alert(err))
        },[])

    console.log("hi from FoodRecipes component", id, recipes)

  return (
    <div>
      
    </div>
  )
}

export default FoodRecipes
