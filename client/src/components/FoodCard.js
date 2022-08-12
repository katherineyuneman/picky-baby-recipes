import React from 'react'
import { Card } from '../styled-components/styleIndex'
import { Link } from 'react-router-dom'

function FoodCard({food}) {
  return (
      <Card>
    <div key={food.id}>
            <h5>{food.name}</h5>
       
            <p>
                  Type: {food.food_type}
                  <br/>
                  <br/>
                  Common Allergen: {String(food.common_allergen)}
                  <br/>
                  <br/>
                  Age: {food.age}
                  <br/>
                  <br/>
                  Nutrition Rating: {food.nutrition_rating}
                  <br/>
                  <br/>
                  Description: {food.full_desc}
                  <img src={`${food.image_url}`} alt={food.name}></img>
              </p>
              
                <Link to={`/foods/${food.id}`}>
                  Details about this Food
                </Link>
                <br />
                <h5><Link to={`/foods/${food.id}/recipes`}>
                  My {food.name} recipes
                </Link></h5>
                <br />
                <p>Created By User_ID: {food.user_id}</p>
                
              
            </div>
            </Card>
  )
}

export default FoodCard
