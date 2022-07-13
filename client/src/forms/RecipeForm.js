import React, {useState, useEffect} from 'react'

function RecipeForm() {

    const [foodIngredientOptions, setFoodIngredientOptions] = useState([])
    
    const [ recipeInputs, setRecipeInputs ] = useState({
        title:"",
        directions: "",
        source:""
    })

    const [ ingredientInputs, setIngredientInputs ] = useState([{
        amount:"",
        measurement: "",
        food_id:""
    }])

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
        setRecipeInputs({
            ...recipeInputs,
            [e.target.name]: e.target.value})
    }

    const handleIngredientInputs = e => {
        setIngredientInputs([{
            ...ingredientInputs,
            [e.target.name]: e.target.value}])
    }

    const handleAddIngredient = () => {
        return <div>
            <select name="food_id" value={ingredientInputs.food_id} required onChange={handleIngredientInputs}>
        <option name="default" value="default">Select Food Item</option>
        {foodDropDownOptions}
    </select>
    <label>Amount:
      <input type="decimal" name="amount" value={ingredientInputs.amount} maxLength={10} onChange={handleIngredientInputs}/>
    </label>
    <label>Measurement
      <input type="decimal" name="measurement" value={ingredientInputs.measurement} maxLength={30} onChange={handleIngredientInputs}/>
    </label>
    </div>
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
                // setCreatedRecipe(data)
                handleIngredientSubmit(data)
                setRecipeInputs({title:"",
                directions: "",
                source:""})
                
                //   history.push("/myrecipes")
              }
          })
          // .catch(error => alert(error))
    }
    const handleIngredientSubmit = (data) => {
        fetch('/ingredients', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body:JSON.stringify({
              amount: ingredientInputs.amount,
              measurement: ingredientInputs.measurement,
              food_id: ingredientInputs.food_id,
              recipe_id: data.id
          })
            })
            .then(resp => resp.json())
            .then((data) => {
                if (data.errors){
                    alert(data.errors)
                } else {
                  setIngredientInputs({ amount:"",
                  measurement: "",
                  food_id:""})
                  //   history.push("/myrecipes")
                }
            })
    }

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
            <br/>
            <button onClick={handleAddIngredient}>Ingredients:</button>
            <br/>
            {/* <select name="food_id" value={ingredientInputs.food_id} required onChange={handleIngredientInputs}>
                <option name="default" value="default">Select Food Item</option>
                {foodDropDownOptions}
            </select>
            <label>Amount:
              <input type="decimal" name="amount" value={ingredientInputs.amount} maxLength={10} onChange={handleIngredientInputs}/>
            </label>
            <label>Measurement
              <input type="decimal" name="measurement" value={ingredientInputs.measurement} maxLength={30} onChange={handleIngredientInputs}/>
            </label> */}
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
