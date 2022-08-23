import React, {useState} from 'react'

function FoodEditForm({setFood, food, setDisplayEdit, errorMessage}) {

    const [ foodInputs, setFoodInputs ] = useState({
        name:food.name,
        food_type: food.food_type,
        age:food.age,
        nutrition_rating: food.nutrition_rating,
        common_allergen: food.common_allergen,
        full_desc:food.full_desc,
        image_url:food.image_url,
        user_id: food.user_id
    })


    const handleFoodInputs = e => {
        setFoodInputs({
            ...foodInputs,
            [e.target.name]: e.target.value})
    }

    const handlFoodUpdate = (e) => {
        e.preventDefault();

        fetch(`/foods/${food.id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body:JSON.stringify(foodInputs)
            })
    
            .then(resp => resp.json())
            .then((data) => {
                if (data.error){
                    errorMessage(data.error)
                    setDisplayEdit(false)
                } else {
                    setFood(data)
                    setDisplayEdit(false)
                }
            })
    }

  return (
    <div>
        < br/>
        <h1>Edit Food</h1>
        
        <form onSubmit={(e) => handlFoodUpdate(e, foodInputs)}>
            <label>Food Name:
                <input type="txext" name="name" value={foodInputs.name} maxLength={30} onChange={handleFoodInputs}/>
            </label>
            <br/>
            <label>Food Type:
                <input type="text" name="food_type" value={foodInputs.food_type} onChange={handleFoodInputs}/>
            </label>
            <br/>
            <label>Age:
                <input type="text" name="age" value={foodInputs.age} maxLength={50} onChange={handleFoodInputs}/>
            </label>
            <label>Nutrition Rating (1 lowest, 10 highest):
                <input type="integer" name="nutrition_rating" value={foodInputs.nutrition_rating} maxLength={50} onChange={handleFoodInputs}/>
            </label>
            <label>Description:
                <input type="text" name="full_desc" value={foodInputs.full_desc} maxLength={50} onChange={handleFoodInputs}/>
            </label>
            <label>Image URL:
                <input type="textarea" name="image_url" value={foodInputs.image_url} onChange={handleFoodInputs}/>
            </label>
            <button>Save Update</button>
            <br/>
        </form>
    </div>
  )
}

export default FoodEditForm