import React, {useState} from 'react'

function FoodForm({handleFoodSubmit}) {

    const [ foodInputs, setFoodInputs ] = useState({
        name:"",
        food_type: "",
        age:"",
        nutrition_rating: "",
        common_allergen: "",
        full_desc:"",
        image_url:"",
        user_id: ""
    })

    const handleFoodInputs = e => {
        setFoodInputs({
            ...foodInputs,
            [e.target.name]: e.target.value})
    }

  return (
    <div>
        <h1>Create a New Food</h1>
        <form onSubmit={(e) => handleFoodSubmit(e, foodInputs)}>
            <label>Food Name:
                <input type="text" name="name" value={foodInputs.name} maxLength={30} onChange={handleFoodInputs}/>
            </label>
            <br/>
            <label>Food Type:
                <input type="text" name="food_type" value={foodInputs.food_type} onChange={handleFoodInputs}/>
            </label>
            <br/>
            <label>Age:
                <input type="text" name="age" value={foodInputs.age} maxLength={50} onChange={handleFoodInputs}/>
            </label>
            <br />
            <label>   Nutrition Rating (1 lowest, 10 highest):
                <input type="integer" name="nutrition_rating" value={foodInputs.nutrition_rating} maxLength={50} onChange={handleFoodInputs}/>
            </label>
            <br />
            <label> Description:
                <input type="text" name="full_desc" value={foodInputs.full_desc} maxLength={50} onChange={handleFoodInputs}/>
            </label>
            <br />
            <label> Image URL:
                <input type="textarea" name="image_url" value={foodInputs.image_url} onChange={handleFoodInputs}/>
            </label>
            <br />
            <button>Create New Food</button>
            <br/>
        </form>
    </div>
  )
}

export default FoodForm