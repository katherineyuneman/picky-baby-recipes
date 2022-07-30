import React from 'react'
import { Card } from '../styled-components/styleIndex'

function FoodCard({food}) {
  return (
      <Card>
    <div key={food.id}>
            <h5>{food.name}</h5>
       
            <p>
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
              <footer>Save Edit
                <ul>Save</ul>
                <ul>Edit</ul>
                <ul>Delete</ul>
                <cite>By User_ID: {food.user_id}</cite>
                </footer>
              
            </div>
            </Card>
  )
}

export default FoodCard