import React, {useState, useEffect} from 'react'

function RecipeList() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
      fetch("/recipes")
        .then((r) => r.json())
        .then((fetchedRecipes) => setRecipes(fetchedRecipes))
    }, []);


    const eachRecipe = recipes.map((recipe) => {
        <div key={recipe.id}>
            <br/>
            <h2>{recipe.title}</h2>
            <em>Ingredients:

            </em>
            <br/>
            <em>Directions: {recipe.directions}</em>
            <em>{recipe.map((ingredient => {
                return <div>
                    <em>{ingredient.amount}</em>
                </div>
            }))}</em>
        </div>
    })

    
    const recipeList = recipes.map((recipe) => (
        <div key={recipe.id}>
              {/* <cite key={food.id}>By {food.user.user_id}</cite> */}
            </div>
      ))

  return (
    <div>
      {recipeList}
    </div>
  )
}

export default RecipeList
