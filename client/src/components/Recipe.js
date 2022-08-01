import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { TitleDiv, RecipeCardStyle } from '../styled-components/styleIndex';

function Recipe() {
    const {id} = useParams()
    const [ recipe, setRecipe ] = useState({})
    const [ ingredients, setIngredients ] = useState([])

    console.log(id)
    useEffect(() => {
        fetch (`/recipes/${id}`)
        .then(response => response.json())
        .then(data => {
            setRecipe(data)
            setIngredients(data.ingredients)
        })
        .catch(err => alert(err))
        },[])

        console.log(recipe.ingredients)
        // const ingredients = recipe.ingredients

        const ingredient_map = ingredients.map((ingredient) => {
                return <div key={ingredient.id}>
                    <em>{ingredient.amount} {ingredient.measurement} {ingredient.food.name}</em> 
                </div>
            })

        
    return (
      <div>
          <TitleDiv key={recipe.id}>
          <br/>
            <h2 className='title'>{recipe.title}</h2>
          </TitleDiv>
          <RecipeCardStyle>
              {ingredient_map}
          {/* Ingredients:
          { recipe.ingredients.length === 0 ? <h1>Loading...</h1> : <em>{recipe.ingredients.map((ingredient => {
              return <div key={ingredient.id}>
                  <em>{ingredient.amount} {ingredient.measurement} {ingredient.food.name}</em> 
              </div>
          }))}</em> } */}
          
          <br/>
          <em>Directions: {recipe.directions}</em>
          <br/>
          {/* <button onClick={() => handleDelete(recipe.id)}>Delete Recipe</button> */}
          <br />
          {/* {isEditing && selectedRecipe.id === recipe.id ? <RecipeEditForm handleUpdatedRecipe={handleUpdatedRecipe} isEditing={isEditing} setIsEditing={setIsEditing} selectedRecipe={selectedRecipe}/> :  <button onClick={(e) => handleEdit(e, recipe)}>Edit Recipe</button>} */}
          </RecipeCardStyle>
          </div>

  )
}

export default Recipe
