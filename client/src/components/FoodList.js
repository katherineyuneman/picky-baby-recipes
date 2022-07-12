import React, {useState, useEffect} from 'react'

function FoodList() {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
      fetch("/foods")
        .then((r) => r.json())
        .then((fetchedFood) => setFoods(fetchedFood))
    }, []);

    console.log('fetched food', foods[0])

    const foodList = foods.map((food) => (
        <div key={food.id}>
            <h2 >{food.name}</h2>
            <p>
              <h3>
                  Type: {food.food_type}
                  <br/>
                  Common Allergen: {food.common_allergen.toString()}
                  <br/>
                  Age: {food.age}
                  <br/>
                  Nutrition Rating: {food.nutrition_rating}
                  <br/>
                  Description: {food.full_desc}

              </h3>
              <cite>By {food.user_id}</cite>
            </p>
            </div>
      ))
  return (
    <div>
      {foodList}
    </div>
  )
}

// t.string "name"
//     t.string "food_type"
//     t.string "age"
//     t.integer "nutrition_rating"
//     t.boolean "common_allergen"
//     t.text "full_desc"
//     t.string "image_url"
//     t.bigint "user_id", null: false
//     t.datetime "created_at", precision: 6, null: false
//     t.datetime "updated_at", precision: 6, null: false
//     t.index ["user_id"], name: "index_foods_on_user_id"

export default FoodList
