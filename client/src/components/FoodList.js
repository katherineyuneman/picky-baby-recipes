import React, {useState, useEffect} from 'react'

function FoodList() {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
      fetch("http://localhost:3000/foods")
        .then((r) => r.json())
        .then((fetchedFood) => setFoods(fetchedFood))
    }, []);

    const foodList = foods.map((food) => (
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h2 key={food.id}>{food.name}</h2>
            <p>
              <em key={food.id}>Type {food.food_type}</em>
              {/* <cite key={food.id}>By {food.user.user_id}</cite> */}
            </p>
            </div>
      ))
  return (
    <div>
      {foodList}
    </div>
  )
}

export default FoodList
