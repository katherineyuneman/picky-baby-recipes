import React, { useState, useEffect } from 'react'
import FoodForm from '../../food/food-forms/FoodForm'



function RecipeEditForm({selectedRecipe, setIsEditing, isEditing, handleUpdatedRecipe}) {

    const [foodIngredientOptions, setFoodIngredientOptions] = useState([])
    const [ recipeInputs, setRecipeInputs ] = useState({
        id: selectedRecipe.id,
        title: selectedRecipe.title,
        directions: selectedRecipe.directions,
        source: selectedRecipe.source
    })
    const [ ingredientInputs, setIngredientInputs ] = useState(selectedRecipe.ingredients)
 

    const [ displayFoodForm, setDisplayFoodForm ] = useState(false)

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

    const handleIngredientInputs = (e, index) => {
        if (e.target.value === "addNew"){
            setDisplayFoodForm(true)
        }
        const { name, value } = e.target;
        const list = [...ingredientInputs];
        list[index][name] = value;
        setIngredientInputs(list);
        }
    
    const addIngredientField = (e) => {
        e.preventDefault();
        setIngredientInputs([...ingredientInputs, {
            amount:"",
            measurement: "",
            food_id:""
        }])
    }
        

    const handleSelectedRecipe = (e) => {
        setRecipeInputs({
            ...recipeInputs,
            [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const full_recipe = 
                    {...recipeInputs, 
                    ingredients_attributes: ingredientInputs
                    }
        

    fetch(`/recipes/${full_recipe.id}`, {
        method: 'PATCH',
        headers: {
        'Content-Type': 'application/json'
        },
        body:JSON.stringify(full_recipe)
        })
        .then(resp => resp.json())
        .then((data) => {
            if (data.errors){
                alert(data.errors)
            } else {
            setIsEditing(false)
            handleUpdatedRecipe(data)
            }
        })


}

const handleFoodSubmit = (e, foodInputs) => {
    e.preventDefault()

    fetch('/foods', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(foodInputs)
        })

        .then(resp => resp.json())
        .then((data) => {
            if (data.errors){
                alert(data.errors)
            } else {
              setDisplayFoodForm(false)
              setFoodIngredientOptions([...foodIngredientOptions, data])
            }
        })
}


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Recipe Title:
              <input type="text" name="title" value={recipeInputs.title} maxLength={30} onChange={handleSelectedRecipe}/>
            </label>
            <br/>
            <label>Directions:
              <input type="textarea" name="directions" value={recipeInputs.directions} onChange={handleSelectedRecipe}/>
            </label>
            <br/>
            <label>Source
              <input type="text" name="source" value={recipeInputs.source} maxLength={50} onChange={handleSelectedRecipe}/>
            </label>
            <br/>
            <br/>
            <br/>
            {ingredientInputs.map((data, index) => {
                return (
                    <div key={data.id}>
                        <select name="food_id" value={data.food_id} required onChange={(e)=>handleIngredientInputs(e, index)}>
                            <option name="default" value="default">Select Food Item</option>
                            {foodDropDownOptions}
                            <option name="addNew" value="addNew">Add New Food</option>
                        </select>
                        <label>Amount:
                            <input type="decimal" name="amount" value={data.amount} maxLength={10} onChange={(e)=>handleIngredientInputs(e, index)}/>
                        </label>
                        <label>Measurement
                            <input type="decimal" name="measurement" value={data.measurement} maxLength={30} onChange={(e)=>handleIngredientInputs(e, index)}/>
                        </label>
                    </div>
                )
                })
            }

            <br/>
            <button onClick={addIngredientField}>Add another Ingredient</button>
            <br/>
              <button>Update Recipe</button>
        </form>
        { displayFoodForm === true ? <FoodForm handleFoodSubmit={handleFoodSubmit}/> : null}
        <br/>
        <br/>
        
        </div>
  )
}

export default RecipeEditForm
