import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import FoodForm from '../../food/food_forms/FoodForm'
import { HomeContainer } from '../../../styled-components/styleIndex'

function RecipeForm() {

    const [foodIngredientOptions, setFoodIngredientOptions] = useState([])
    const [ displayFoodForm, setDisplayFoodForm ] = useState(false)
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
    const [ createFoodErrorsList, setCreateFoodErrorsList ] = useState([])
    const [ createRecipeErrorsList, setCreateRecipeErrorsList ] = useState([])

    const navigate = useNavigate()

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


    const handleIngredientInputs = (e, index) => {
        if (e.target.value === "addNew"){
            setDisplayFoodForm(true)
            console.log(displayFoodForm)
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

    const handleFoodSubmit = (e, foodInputs) => {
        e.preventDefault()
        console.log(foodInputs)

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
                    console.log("data errors inside post for food:", data.errors)
                    const errorLis = data.errors.map((e) => <li>{e}</li>)
                    setCreateFoodErrorsList(errorLis)
                    
                } else {
                    setCreateFoodErrorsList([])
                    setDisplayFoodForm(false)
                    console.log("data inside post-fetch:", data)
                    setFoodIngredientOptions([...foodIngredientOptions, data])
                    console.log("updated food ingredient options:", foodIngredientOptions)
                }
            })
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log("ingredient inputs:", ingredientInputs)
        // set up the array to send
        const full_recipe = 
            {...recipeInputs, 
            ingredients_attributes: [...ingredientInputs]
            }
            console.log("full-recipe:", full_recipe)

            

        fetch('/recipes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({full_recipe})
          })

          .then(resp => resp.json())
          .then((data) => {
            if (data.errors){
                console.log("data errors inside post for food:", data.errors)
                const errorLis = data.errors.map((e) => <li>{e}</li>)
                setCreateRecipeErrorsList(errorLis)
                
            } else {
                setRecipeInputs({title:"",
                directions: "",
                source:""})
                setIngredientInputs([{
                    amount:"",
                    measurement: "",
                    food_id:""
                }])
                  navigate("/myrecipes")
                  setCreateRecipeErrorsList([])
              }
          })
    }

    
  return (
      <HomeContainer>
      <div>
          <h1>Add your recipe below:</h1>
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
            <br/>
            <br />
            {ingredientInputs.map((data, index) => {
                return (
                    <div>
                        <select name="food_id" value={data.food_id} required onChange={(e)=>handleIngredientInputs(e, index)}>
                            <option name="default" value="default">Select Food Item</option>
                            <option name="addNew" value="addNew">ADD NEW FOOD</option>
                            {foodDropDownOptions}
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
            <br/>
              <button>Create Recipe</button>
        </form>
        <ul>{createRecipeErrorsList}</ul>
        { displayFoodForm === true ? <FoodForm handleFoodSubmit={handleFoodSubmit}/> : console.log("else statement food_id:",ingredientInputs[0].food_id)}
        <br/>
        <ul>{createFoodErrorsList}</ul>
        </div>
        </HomeContainer>
  )
    
}
export default RecipeForm
