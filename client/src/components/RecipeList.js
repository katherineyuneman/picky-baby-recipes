import React, {useState, useEffect} from 'react'
import RecipeEditForm from '../forms/RecipeEditForm';

function RecipeList() {
    const [recipes, setRecipes] = useState([]);
    const [ selectedRecipe, setSelectedRecipe ] = useState({})
    const [ isEditing, setIsEditing ] = useState(false)
    const [ updatedRecipe, setUpdatedRecipe ] = useState([])
    

    useEffect(() => {
      fetch("/recipes")
        .then((r) => r.json())
        .then((fetchedRecipes) => setRecipes(fetchedRecipes))
    }, []);

    useEffect(() => {
      fetch("/recipes")
        .then((r) => r.json())
        .then((fetchedRecipes) => setRecipes(fetchedRecipes))
    }, [updatedRecipe]);


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

    const handleUpdatedRecipe = (changedRecipe) => {
      console.log("updated recipe after handle:", changedRecipe)
      setUpdatedRecipe(changedRecipe)
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
            {isEditing && selectedRecipe.id === recipe.id ? <RecipeEditForm handleUpdatedRecipe={handleUpdatedRecipe} isEditing={isEditing} setIsEditing={setIsEditing} selectedRecipe={selectedRecipe}/> :  <button onClick={(e) => handleEdit(e, recipe)}>Edit Recipe</button>}
            
        </div>
    })

  return (
    <div>
      {eachRecipe}
    </div>
  )
}

export default RecipeList
