import { useState, useEffect } from 'react';
import FoodList from '../components/FoodList'
import { HomeContainer } from '../styled-components/styleIndex';

function FoodContainer() {

    const [ searchInputs, setSearchInputs ] = useState("")
    const [foods, setFoods] = useState([]);
    const [ filteredFoods, setFilteredFoods ] = useState([])

    useEffect(() => {
      fetch("/foods")
        .then((r) => r.json())
        .then((fetchedFood) => {
          setFoods(fetchedFood)
          setFilteredFoods(fetchedFood)
        })
    }, []);
    
    const handleSearchInputs = (e) => {
      console.log(e.target.value)
      setSearchInputs(e.target.value)
    }


    const handleSearchSubmit = (e) => {
      e.preventDefault();
      console.log("inside submit:", searchInputs)
      const searchedFoods = foods.filter(food => food.name.includes(searchInputs) )
      setFilteredFoods(searchedFoods)
      console.log("searched foods inside submit:",searchedFoods)
    }

    const handleResetSearch = () => {
      setFilteredFoods(foods)
    }

  return (
    <div>
      <br/>
      <form onSubmit={handleSearchSubmit}>
        <input type="text" value={searchInputs} onChange={handleSearchInputs}/>
        <button>Search</button>
      </form>
      <button onClick={handleResetSearch}>Reset Search</button>
      <br/>
      <FoodList foods={filteredFoods}/>
      
      </div>
  )
}

export default FoodContainer
