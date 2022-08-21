import React, {useContext} from 'react'
import { Container} from '../../styled-components/styleIndex';
import FoodCard from './FoodCard';
import { UserContext } from '../../context/user';

function FoodList({foods}) {
    
    const foodList = foods.map((food) => 
      (
        <FoodCard key={food.id} food={food}/>
           
      ))
  return (
    <Container>
      {foodList}
  </Container>
  )
}

export default FoodList
