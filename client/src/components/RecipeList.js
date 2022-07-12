import React, {useState, useEffect} from 'react'

function RecipeList() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
      fetch("/recipes")
        .then((r) => r.json())
        .then((fetchedRecipes) => setRecipes(fetchedRecipes))
    }, []);

    console.log("recipes inside RecipeList:", recipes)

    // console.log("recipes:", recipes.ingredients[0])
    const eachRecipe = recipes.map((recipe) => {
        return <div key={recipe.id}>
            <br/>
            <h2>{recipe.title}</h2>     
            Ingredients:
            <em>{recipe.ingredients.map((ingredient => {
                
                return <div>
                    <em>{ingredient.amount} {ingredient.measurement} {ingredient.food.name}</em> 
                </div>
            }))}</em>
            <br/>
            <em>Directions: {recipe.directions}</em>
            <br/>
        </div>
    })

  return (
    <div>
      {eachRecipe}
    </div>
  )
}

export default RecipeList
