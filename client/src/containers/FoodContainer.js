import { useState, useEffect } from 'react';
import FoodList from '../components/FoodList'
import { HomeContainer } from '../styled-components/styleIndex';

function FoodContainer() {

    const [foods, setFoods] = useState([]);

    useEffect(() => {
      fetch("/foods")
        .then((r) => r.json())
        .then((fetchedFood) => setFoods(fetchedFood))
    }, []);

    console.log('fetched food', foods[0])

  return (
      

       
      <FoodList foods={foods}/>
      

  )
}

export default FoodContainer
