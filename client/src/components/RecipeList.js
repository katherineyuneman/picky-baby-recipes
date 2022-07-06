import React, {useState, useEffect} from 'react'

function RecipeList() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
      fetch("/recipes")
        .then((r) => r.json())
        .then((fetchedRecipes) => setRecipes(fetchedRecipes))
    }, []);

    const recipeList = recipes.map((recipe) => (
        <div key={recipe.id}>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h2>{recipe.title}</h2>
            <p>
            <em>Ingredients:
                {/* {recipe.ingredients.map((ingredient))} */}
              </em>
              <br/>
              <em>Directions: {recipe.directions}</em>
              
              
              {/* <cite key={food.id}>By {food.user.user_id}</cite> */}
            </p>
            </div>
      ))
  return (
    <div>
      {recipeList}
    </div>
  )
}

export default RecipeList
