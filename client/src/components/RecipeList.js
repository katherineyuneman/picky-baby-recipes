import React, {useState, useEffect} from 'react'

function RecipeList() {
    const [recipes, setRecipes] = useState([]);
    const [ isEditing, setIsEditing ] = useState(false)
    const [ recipeEditing, setRecipeEditing ] = useState({})
    const [ editRecipeInputs, setEditRecipeInputs ] = useState({
      id: "",
      title:"",
      directions: "",
      source:"",
            }
    )
    const [ editIngredientInputs, setEditIngredientInputs ] = useState({
      id:"",
      amount:"",
      measurement: ""
            }
    )

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

    const handleEdit = (recipe) => {
      setIsEditing(true)
      setRecipeEditing(recipe)
      setEditRecipeInputs(recipe)
      console.log("recipe after edit click:", recipe)
    }

    const handleEditRecipeInputs = (e) => {
      setEditRecipeInputs({
        ...editRecipeInputs,
        [e.target.name]: e.target.value})
    }

    const handleEditSubmit = (e, changedRecipe) => {
      e.preventDefault()
      console.log("changed recipe:", changedRecipe)

      // fetch('/foods', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body:JSON.stringify(foodInputs)
      //   })

      //   .then(resp => resp.json())
      //   .then((data) => {
      //       if (data.errors){
      //           alert(data.errors)
      //       } else {
      //         setDisplayFoodForm(false)
      //         console.log("data inside post-fecth:", data)
      //         setFoodIngredientOptions([...foodIngredientOptions, data])
      //         console.log("updated food ingredient options:", foodIngredientOptions)
      //       }
      //   })

    }


    // console.log("recipes:", recipes.ingredients[0])
    
    const recipeToEdit = recipes.filter((recipe) => recipe.id === recipeEditing.id)
    console.log("recipe to edit", recipeToEdit)
    const recipeToEditMap = recipeToEdit.map((recipeEdit) => {
      return <div key={recipeEdit.id}>
      <br/>
      <form onSubmit={handleEditSubmit}>
      <h2><input type="text" name="title" defaultValue={recipeEditing.title} value={editRecipeInputs.title} onChange={handleEditRecipeInputs}/></h2>   
    Ingredients:
    <em>{recipeEditing.ingredients.map((ingredient => {
        
        return <div key={ingredient.id}>
            <em>{ingredient.amount} {ingredient.measurement} {ingredient.food.name}</em> 
        </div>
    }))}</em>
    <br/>
    <em>Directions: {recipeEdit.directions}</em>
    <br/>
    <button>Save Updates</button>
    </form>
</div>})

  
    

    const filteredRecipes = recipes.filter((recipe) => recipe.id !== recipeEditing.id)
    console.log("filtered recipes:", filteredRecipes)

    const eachRecipe = filteredRecipes.map((recipe) => {
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
            <button onClick={() => handleEdit(recipe)}>Edit Recipe</button>
        </div>
    })

  return (
    <div>
      {recipeToEditMap}
      {eachRecipe}
    </div>
  )
}

export default RecipeList
