import React, {useState, useEffect, useContext} from 'react'
import RecipeEditForm from './recipe-forms/RecipeEditForm';
import { RecipeCardStyle, TitleDiv, HomeContainer} from '../../styled-components/styleIndex';
import { UserContext } from '../../context/user';
import { Link } from 'react-router-dom';

function RecipeList({recipes, setRecipes}) {
  const [ isEditing, setIsEditing ] = useState(false)
  const [ selectedRecipe, setSelectedRecipe ] = useState({})

  const handleUpdatedRecipe = (changedRecipe) => {
    const updatedRecipeList = recipes.filter((recipe) => recipe.id !== changedRecipe.id)
    setRecipes([changedRecipe, ...updatedRecipeList])
  }

  const handleEdit = (e, recipe) => {
    setSelectedRecipe(recipe)
    setIsEditing(true)
  }

  const handleDelete = (id) => {
    fetch(`/recipes/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setRecipes((recipes) =>
          recipes.filter((recipe) => recipe.id !== id)
        );
      }
    });
  }
  console.log("recipes:,", recipes)
  const eachRecipe = recipes.map((recipe) => {
    return (
        <div key={recipe.id}>
        <TitleDiv>
        <br/>
        <Link to={`/recipes/${recipe.id}`} id={recipe.id} className="link">
          <h2 className='title'>{recipe.title}</h2>
        </Link>
        </TitleDiv>
        
        <RecipeCardStyle>
        Ingredients:
        <em>{recipe.ingredients.map((ingredient => {
            return(
              <div key={ingredient.id}>
                <em>{ingredient.amount} {ingredient.measurement} {ingredient.food.name}</em> 
              </div>
              )
            }))
            }
        </em>
        <br/>
        <em>Directions: {recipe.directions}</em>
        <br/>
        <button onClick={() => handleDelete(recipe.id)}>Delete Recipe</button>
        <br />
        {isEditing && selectedRecipe.id === recipe.id ? <RecipeEditForm handleUpdatedRecipe={handleUpdatedRecipe} isEditing={isEditing} setIsEditing={setIsEditing} selectedRecipe={selectedRecipe}/> :  <button onClick={(e) => handleEdit(e, recipe)}>Edit Recipe</button>}
        </RecipeCardStyle>
        </div>
      )
    }
  )
    
      return (
        <HomeContainer>
          <div>
          {eachRecipe}
          </div>
        </HomeContainer>
        )
}

export default RecipeList
