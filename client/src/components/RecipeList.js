import React, {useState, useEffect, useContext} from 'react'
import RecipeEditForm from '../forms/RecipeEditForm';
import { RecipeCardStyle, TitleDiv } from '../styled-components/styleIndex';
import { UserContext } from '../context/user';
import { Link } from 'react-router-dom';

function RecipeList() {
    const [recipes, setRecipes] = useState([]);
    const [ selectedRecipe, setSelectedRecipe ] = useState({})
    const [ isEditing, setIsEditing ] = useState(false)
    const [ updatedRecipe, setUpdatedRecipe ] = useState([])
    const { user, loggedIn } = useContext(UserContext)

    

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
      return <div><TitleDiv key={recipe.id}>
      {/* <div key={recipe.id}> */}
          <br/>
          <Link to={`/recipes/${recipe.id}`} id={recipe.id}>
            <h2 className='title'>{recipe.title}</h2>
          </Link>
          </TitleDiv>
          
          <RecipeCardStyle>
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
          <br />
          {isEditing && selectedRecipe.id === recipe.id ? <RecipeEditForm handleUpdatedRecipe={handleUpdatedRecipe} isEditing={isEditing} setIsEditing={setIsEditing} selectedRecipe={selectedRecipe}/> :  <button onClick={(e) => handleEdit(e, recipe)}>Edit Recipe</button>}
          </RecipeCardStyle>
          </div>
      
    })

  
    if (loggedIn === true) {
      return <div>
        <h1>{user.first_name}'s Recipes </h1>
        {eachRecipe}
      </div>

  } else {
      return <h1>Please login or signup</h1>
      }
}

export default RecipeList
