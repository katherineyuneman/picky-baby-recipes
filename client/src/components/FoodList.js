import React, {useState, useEffect} from 'react'

function FoodList() {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
      fetch("/foods")
        .then((r) => r.json())
        .then((fetchedFood) => setFoods(fetchedFood))
    }, []);

    console.log('fetched food', foods[0])
    

    const foodList = foods.map((food) => 
      (


        <div class="card" key={food.id}>
          <div class="card-content">
            <p class="title">{food.name}</p>
       
            <p class="subtitle">
                  Type: {food.food_type}
                  <br/>
                  Common Allergen: {String(food.common_allergen)}
                  <br/>
                  Age: {food.age}
                  <br/>
                  Nutrition Rating: {food.nutrition_rating}
                  <br/>
                  Description: {food.full_desc}

              </p>
              <footer class="card-footer">
    <a href="#" class="card-footer-item">Save</a>
    <a href="#" class="card-footer-item">Edit</a>
    <a href="#" class="card-footer-item">Delete</a>
    <cite>By User_ID: {food.user_id}</cite>
  </footer>
              

            </div>
            </div>
      ))
  return (
    <div>
      {foodList}
    </div>
  )
}

export default FoodList
