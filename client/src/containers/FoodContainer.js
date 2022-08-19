import { useState, useEffect } from 'react';
import FoodList from '../components/food/FoodList';
import { HomeContainer, SearchStyle } from '../styled-components/styleIndex';
import { useParams, useNavigate } from 'react-router-dom';

function FoodContainer({foodSubmitted}) {

    const { search } = useParams()
    const navigate = useNavigate()
    const [ searchInputs, setSearchInputs ] = useState("")
    const [foods, setFoods] = useState([]);
    const [ filteredFoods, setFilteredFoods ] = useState([])

    console.log("search params:", search)

    console.log("foodSubmitted:",foodSubmitted)
    useEffect(() => {
      fetch("/foods")
        .then((r) => r.json())
        .then((fetchedFood) => {
          setFoods(fetchedFood)
          if (search) {
            const paramSearchFoods = fetchedFood.filter(food => food.name.toLowerCase().includes(search))
            setFilteredFoods(paramSearchFoods)
          } else setFilteredFoods(fetchedFood)
        })
    }, []);

    const handleSearchInputs = (e) => {
      console.log(e.target.value)
      setSearchInputs(e.target.value)
    }


    const handleSearchSubmit = (e) => {
      e.preventDefault();
      navigate('/foodlist')
      console.log("inside submit:", searchInputs)
      const searchedFoods = foods.filter(food => food.name.toLowerCase().includes(searchInputs.toLowerCase()) )
      setFilteredFoods(searchedFoods)
      console.log("searched foods inside submit:",searchedFoods)
    }

    const handleResetSearch = () => {
      if (search) {
        navigate('/foodlist')
        setFilteredFoods(foods)
      } else
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
