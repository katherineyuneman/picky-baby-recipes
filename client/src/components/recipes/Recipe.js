import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
import { TitleDiv, RecipeCardStyle, HomeContainer } from '../../styled-components/styleIndex';


function Recipe() {
    const {id} = useParams()
    const navigate = useNavigate()
    const [ recipe, setRecipe ] = useState({})
    const [ ingredients, setIngredients ] = useState([])

    useEffect(() => {
        fetch (`/recipes/${id}`)
        .then(response => response.json())
        .then(data => {
          if (data.error){
            alert(data.error)
            navigate('/recipes')
        } else {
          setRecipe(data)
          setIngredients(data.ingredients)
        }})
      }, [])

        const ingredient_map = ingredients.map((ingredient) => {
                return <div key={ingredient.id}>
                    <em>{ingredient.amount} {ingredient.measurement} {ingredient.food.name}</em> 
                </div>
            })

        
    return (
        <HomeContainer>
      <div>
          <Link to={"/recipes"}>
            <button>Back to My Recipes</button>
          </Link>
          <Link to={"/foods"}>
            <button>Back to My Food</button>
          </Link>
          <TitleDiv key={recipe.id}>
          <br/>
            <h2 className='title'>{recipe.title}</h2>
          </TitleDiv>
          <RecipeCardStyle>
              {ingredient_map}
          
          <br/>
          <em>Directions: {recipe.directions}</em>
          <br/>
          {/* <button onClick={() => handleDelete(recipe.id)}>Delete Recipe</button> */}
          <br />
          {/* {isEditing && selectedRecipe.id === recipe.id ? <RecipeEditForm handleUpdatedRecipe={handleUpdatedRecipe} isEditing={isEditing} setIsEditing={setIsEditing} selectedRecipe={selectedRecipe}/> :  <button onClick={(e) => handleEdit(e, recipe)}>Edit Recipe</button>} */}
          </RecipeCardStyle>
          </div>
          </HomeContainer>

  )
}

export default Recipe
