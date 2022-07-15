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

    const handleIngredientInputs = (e, index) => {
        const { name, value } = e.target;
        const list = [...ingredientInputs];
        list[index][name] = value;
        setIngredientInputs(list);
        console.log(ingredientInputs)
        
        // setIngredientInputs([{
        //     ...ingredientInputs,
        //     [e.target.name]: e.target.value}])
    }

    const addIngredientField = (e) => {
        e.preventDefault();
        setIngredientInputs([...ingredientInputs, {
            amount:"",
            measurement: "",
            food_id:""
        }])
    }

    // const handleAddIngredient = () => {
    //     return <div> <select name="food_id" value={ingredientInputs.food_id} required onChange={handleIngredientInputs}>
    //                 <option name="default" value="default">Select Food Item</option>
    //                 {foodDropDownOptions}
    //             </select></div>
    

    const handleSubmit = e => {
        e.preventDefault()
        console.log("ingredient inputs:", ingredientInputs)
        // set up the array to send
        const full_recipe = 
            {...recipeInputs, 
            ingredients_attributes: [...ingredientInputs]
            }
            

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
                  alert(data.errors)
              } else {
                // setCreatedRecipe(data)
                // handleIngredientSubmit(data)
                setRecipeInputs({title:"",
                directions: "",
                source:""})
                setIngredientInputs([{
                    amount:"",
                    measurement: "",
                    food_id:""
                }])
                //   history.push("/myrecipes")
              }
          })
          // .catch(error => alert(error))
    }


    // const handleIngredientSubmit = (data) => {
    //     const ingredientsForFetch = ingredientInputs.map((ingredient)=>{
    //        ({...ingredient, 
    //         recipe_id: data.id
    //         })
    //     }) 
    //     console.log('ingredient inputs pre-submit:', ingredientsForFetch)
    //     fetch('/ingredients', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json'
    //         },
    //         body:JSON.stringify([ingredientsForFetch])
    //         })
    //         .then(resp => resp.json())
    //         .then((data) => {
    //             if (data.errors){
    //                 alert(data.errors)
    //             } else {
    //                 console.log("data post post fetch:", data)
    //             //   setIngredientInputs({ amount:"",
    //             //   measurement: "",
    //             //   food_id:""})
    //               //   history.push("/myrecipes")
    //             }
    //         })
    // }



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
            <br/>
            

            {ingredientInputs.map((data, index) => {
                return (
                    <div>
                        <select name="food_id" value={data.food_id} required onChange={(e)=>handleIngredientInputs(e, index)}>
                            <option name="default" value="default">Select Food Item</option>
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
  )
        }


export default RecipeForm
