import React, {useState, useEffect} from 'react'

function RecipeForm() {

    const [foodIngredientOptions, setFoodIngredientOptions] = useState([])
    const [ createdRecipe, setCreatedRecipe ] = useState({})
    
    const [ recipeInputs, setRecipeInputs ] = useState({
        title:"",
        directions: "",
        source:""
    })

    const [ ingredientInputs, setIngredientInputs ] = useState({
        amount:"",
        measurement: "",
        food_id:""
    })

    useEffect(() => {
        fetch ('/foods')
        .then(response => response.json())
        .then((food) => setFoodIngredientOptions(food))
        .catch(err => alert(err))
      }
      ,[])
    
    const foodDropDownOptions = foodIngredientOptions.map((food) => 
        <option key={food.id} value={food.id}>{food.name}</option>
        )

    const handleRecipeInputs = e => {
        console.log(e.target.value)
        setRecipeInputs({
            ...recipeInputs,
            [e.target.name]: e.target.value})
    }

    const handleIngredientInputs = e => {
        console.log(e.target.value)
        setIngredientInputs({
            ...ingredientInputs,
            [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
  
        fetch('/recipes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({
            title: recipeInputs.title,
            directions: recipeInputs.directions,
            source: recipeInputs.source
        })
          })
          .then(resp => resp.json())
          .then((data) => {
              if (data.errors){
                  alert(data.errors)
              } else {
                setRecipeInputs(data)
                setCreatedRecipe(data)
                //   history.push("/myrecipes")
              }
          })
          // .catch(error => alert(error))
    }
    console.log(createdRecipe.id)

  return (
        <form onSubmit={handleSubmit}>
            <label>Recipe Title:
              <input type="text" name="title" value={recipeInputs.title} maxLength={30} onChange={handleRecipeInputs}/>
            </label>
            <br/>
            <label>Directions:
              <input type="textarea" name="directions" value={recipeInputs.directions} onChange={handleRecipeInputs}/>
            </label>
            <br/>
            <label>Source
              <input type="text" name="source" value={recipeInputs.source} maxLength={50} onChange={handleRecipeInputs}/>
            </label>
            <br/>
            <label>Add Ingredient:
                <select name="food_id" value={ingredientInputs.food_id} required onChange={handleIngredientInputs}>
                    <option name="default" value="default">Select Food Item</option>
                    {foodDropDownOptions}
                </select>
            </label>
            <label>Amount:
              <input type="decimal" name="amount" value={ingredientInputs.amount} maxLength={10} onChange={handleIngredientInputs}/>
            </label>
            <label>Measurement
              <input type="decimal" name="measurement" value={ingredientInputs.measurement} maxLength={30} onChange={handleIngredientInputs}/>
            </label>
            {/* <label>Ingredients:
              <input type="password" name="password" value={signupCredentials.password} maxLength={20} onChange={handleInputs}/>
            </label>
            <br/>
            <label>Password Confirmation:
              <input type="password" name="password_confirmation" value={signupCredentials.password_confirmation} maxLength={20} onChange={handleInputs}/>
            </label> */}
            <br/>
              <button>Create Recipe</button>
        </form>
  )
}

export default RecipeForm
