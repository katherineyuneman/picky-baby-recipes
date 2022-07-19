import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import RecipeEditForm from '../forms/RecipeEditForm';

function RecipeList() {
    const [recipes, setRecipes] = useState([]);
    const [ selectedRecipe, setSelectedRecipe ] = useState({})
    const [ isEditing, setIsEditing ] = useState(false)
    

    useEffect(() => {
      fetch("/recipes")
        .then((r) => r.json())
        .then((fetchedRecipes) => setRecipes(fetchedRecipes))
    }, []);


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

    const handleEdit = (e, recipe) => {
      console.log("edit recipe click:", recipe)
      setSelectedRecipe(recipe)
      setIsEditing(true)
    }

    const eachRecipe = recipes.map((recipe) => {
        return <div key={recipe.id}>
            <br/>
            <h2>{recipe.title}</h2>
            Ingredients:
            <em>{recipe.ingredients.map((ingredient => {
                
                return <div key={ingredient.id}>
                    <em>{ingredient.amount} {ingredient.measurement} {ingredient.food.name}</em> 
                </div>
            }))}</em>
            <br/>
            <em>Directions: {recipe.directions}</em>
            <br/>
            <button onClick={() => handleDelete(recipe.id)}>Delete Recipe</button>
            {isEditing && selectedRecipe.id === recipe.id ? <RecipeEditForm isEditing={isEditing} setIsEditing={setIsEditing} selectedRecipe={selectedRecipe}/> :  <button onClick={(e) => handleEdit(e, recipe)}>Edit Recipe</button>}
            
        </div>
    })

  return (
    <div>
      {eachRecipe}
    </div>
  )
}

export default RecipeList
