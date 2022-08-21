import React, { useContext } from 'react'
import { Card } from '../../styled-components/styleIndex'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/user'

function FoodCard({food}) {
  const { user, loggedIn } = useContext(UserContext)

  

  const food_id = food.id
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
              
                <Link to={`/foods/${food_id}`} className="link">
                  Details about this Food {food_id}
                </Link>
                <br />
                <h5><Link to={`/foods/${food.id}/recipes`} className="linkbg">
                  My {food.name} recipes
                </Link></h5>
                <br />
                <p>Created By User_ID: {food.user_id}</p>
                
              
            </div>
            </Card>
  )
}

export default FoodCard
