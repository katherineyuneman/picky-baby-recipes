import { useState, useEffect, useContext } from 'react';
import FoodList from '../components/food/FoodList';
import { HomeContainer, SearchStyle } from '../styled-components/styleIndex';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { UserContext } from '../context/user';

function FoodContainer({foodSubmitted, homeSearchedFoods}) {

    const { search } = useParams()
    const navigate = useNavigate()
    const [ searchInputs, setSearchInputs ] = useState("")
    const [foods, setFoods] = useState([]);
    const [ filteredFoods, setFilteredFoods ] = useState([])
    const { user, loggedIn } = useContext(UserContext)
    const [ homeSearchedFoodsState, setHomeSearchedFoodsState ] = useState(homeSearchedFoods)
    

    console.log("TEST", foods)

    // if (homeSearchedFoodsState.length !== 0){
    //   console.log("hi from searched foods")
    //   setFilteredFoods(homeSearchedFoodsState)
    // }

    useEffect(() => {
      if (homeSearchedFoodsState.length === 0){
        console.log("hi from if")
        fetchFood()
      } else {setFilteredFoods(homeSearchedFoodsState)}
        return setFoods([])
    }, []);

    useEffect(() => {
      if (homeSearchedFoodsState.length !== 0){
        console.log("hi from searched foods")
        setFilteredFoods(homeSearchedFoodsState)
      }
      else if (user) {
        console.log("hi from if")
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
        console.log("search:", search)
         if (searchInputs) {
          const paramSearchFoods = fetchedFood.filter(food => food.name.toLowerCase().includes(searchInputs))
          setFilteredFoods(paramSearchFoods)
        } else setFilteredFoods(fetchedFood)
      })
    }

    
    const handleSearchInputs = (e) => {
      console.log(e.target.value)
      setSearchInputs(e.target.value)
    }


    const handleSearchSubmit = (e) => {
      e.preventDefault();
      if (foods.length === 0){
      setHomeSearchedFoodsState("")
      } else{

      
      
      console.log("inside submit:", searchInputs)
        const searchedFoods = foods.filter(food => food.name.toLowerCase().includes(searchInputs.toLowerCase()) )
        setFilteredFoods(searchedFoods)
      console.log("searched foods inside submit:", searchedFoods)
    }
    }

    const handleResetSearch = () => {
      if (homeSearchedFoodsState.length > 0){
        fetchFood()
      } else {
        console.log(foods)
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
