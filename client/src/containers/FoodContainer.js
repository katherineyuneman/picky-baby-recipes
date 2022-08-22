import { useState, useEffect, useContext } from 'react';
import FoodList from '../components/food/FoodList';
import { HomeContainer, SearchStyle } from '../styled-components/styleIndex';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/user';

function FoodContainer({foodSubmitted, homeSearchedFoods}) {

    // const { search } = useParams()
    // const navigate = useNavigate()
    const [ searchInputs, setSearchInputs ] = useState("")
    const [foods, setFoods] = useState([]);
    const [ filteredFoods, setFilteredFoods ] = useState([])
    const { user } = useContext(UserContext)
    const [ homeSearchedFoodsState, setHomeSearchedFoodsState ] = useState(homeSearchedFoods)

    useEffect(() => {
      if (homeSearchedFoodsState.length === 0){
        fetchFood()
      } else {
        setFilteredFoods(homeSearchedFoodsState)
      }
        return setFoods([])
    }, []);

    useEffect(() => {
      if (homeSearchedFoodsState.length !== 0){
        setFilteredFoods(homeSearchedFoodsState)
      }
      else if (user) {
        fetchFood()
      }
      
        return setFoods([])
    }, [homeSearchedFoodsState]);


    const isLoading = () => {
      return (<h1>Loading...</h1>)
    }


    const fetchFood = () => {
      fetch("/foods")
      .then((r) => r.json())
      .then((fetchedFood) => {
        setFoods(fetchedFood)
         if (searchInputs) {
          const paramSearchFoods = fetchedFood.filter(food => food.name.toLowerCase().includes(searchInputs))
          setFilteredFoods(paramSearchFoods)
        } else setFilteredFoods(fetchedFood)
      })
    }

    const handleSearchInputs = (e) => {
      setSearchInputs(e.target.value)
    }

    const handleSearchSubmit = (e) => {
      e.preventDefault();
      if (foods.length === 0){
      setHomeSearchedFoodsState("")
      } else {
        const searchedFoods = foods.filter(food => food.name.toLowerCase().includes(searchInputs.toLowerCase()) )
        setFilteredFoods(searchedFoods)
      }
    }

    const handleResetSearch = () => {
      if (homeSearchedFoodsState.length > 0){
        fetchFood()
      } else {
        setFilteredFoods(foods)
        setSearchInputs("")
      }
    }

    if (user){
      return (
        <HomeContainer>
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
        </HomeContainer>
        )}
    else if (user === null){
      return (
        <HomeContainer>
          <h1>Not Authorized.  Please <Link to="/login" className='link'> login </Link> or <Link to="/signup" className='link'> sign up </Link>!</h1>
        </HomeContainer>
      )
    }
}

export default FoodContainer
