import { useState, useEffect } from 'react';
import FoodList from '../components/food/FoodList';
import { HomeContainer, SearchStyle } from '../styled-components/styleIndex';
import { useParams, useNavigate } from 'react-router-dom';

function FoodContainer({foodSubmitted, homeSearchedFoods}) {

    const { search } = useParams()
    const navigate = useNavigate()
    const [ searchInputs, setSearchInputs ] = useState("")
    const [foods, setFoods] = useState([]);
    const [ filteredFoods, setFilteredFoods ] = useState([])

    console.log("searched foods within Food COntainer:", homeSearchedFoods)

    console.log("search params:", search)

    useEffect(() => {
      if (homeSearchedFoods.length !== 0) {
        console.log("hi from searched foods")
        setFilteredFoods(homeSearchedFoods)
        
      } else {
        fetchFood()}
    }, []);

    const fetchFood = () => {
      fetch("/foods")
      .then((r) => r.json())
      .then((fetchedFood) => {
        setFoods(fetchedFood)
         if (search) {
          const paramSearchFoods = fetchedFood.filter(food => food.name.toLowerCase().includes(search))
          setFilteredFoods(paramSearchFoods)
        } else setFilteredFoods(fetchedFood)
      })
    }


    console.log("foodSubmitted:",foodSubmitted)
    

    const handleSearchInputs = (e) => {
      console.log(e.target.value)
      setSearchInputs(e.target.value)
    }


    const handleSearchSubmit = (e) => {
      e.preventDefault();
      navigate('/foods')
      console.log("inside submit:", searchInputs)
      const searchedFoods = foods.filter(food => food.name.toLowerCase().includes(searchInputs.toLowerCase()) )
      setFilteredFoods(searchedFoods)
      console.log("searched foods inside submit:",searchedFoods)
    }

    const handleResetSearch = () => {
      // if (search) {
      //   navigate('/foods')
      //   setFilteredFoods(foods)
      // } else
      fetchFood()
      setFilteredFoods(foods)
      setSearchInputs("")
    }

  return (
    <HomeContainer>
    <div>
      <br/>
      <SearchStyle>
      <form onSubmit={handleSearchSubmit}>
        <input type="text" value={searchInputs} onChange={handleSearchInputs}/>
        <button>Search</button>
      </form>
      <button onClick={handleResetSearch}>See all food</button>
      </SearchStyle>
      <br/>
      <FoodList foods={filteredFoods}/>
      
      </div>
      </HomeContainer>
  )
}

export default FoodContainer
