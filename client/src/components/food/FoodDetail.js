import { useState, useEffect, useContext } from "react"
import { useParams, Link } from 'react-router-dom';
import { Card, HomeContainer } from "../../styled-components/styleIndex";
import FoodEditForm from "./food-forms/FoodEditForm";
import { UserContext } from "../../context/user";

function FoodDetail() {
    const {id} = useParams()
    const [ food, setFood ] = useState({})
    const [ displayEdit, setDisplayEdit ] = useState(false)
    // const [ saved, setSaved ] = useState(false)
    const { user, loggedIn } = useContext(UserContext)
    const [ error, setError ] = useState([])
    
    useEffect(() => {
        fetchShow()
        },[])

    const fetchShow = () => {
        fetch (`/foods/${id}`)
        .then(response => response.json())
        .then(data => {
            if (data.error){
                setError(data.error)
            } else {
                setFood(data)
            }
            })
    }

    const errorMessage = (errorFoodForm) => setError(errorFoodForm)
     
    const handleEditFood = (e) => setDisplayEdit(true)
    
    // const handleSave = () => setSaved(saved => !saved)

    if (user) {
        return (
            <HomeContainer>
                <Card key={food.id}>
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
                        <img src={`${food.image_url}`} alt={food.name}></img>
                    </p>
                    <footer>
                        <h2>{error}</h2>
                        {(loggedIn && user.id === food.user_id && displayEdit === false) ? <button onClick={handleEditFood}>Edit Food</button> : null}
                        {displayEdit === false && user.id !== food.user_id ? <h5>You do not have access to edit this food.</h5> : null}
                        {displayEdit ? <FoodEditForm setFood={setFood} errorMessage={errorMessage} food={food} setDisplayEdit={setDisplayEdit} /> : null}
                        <br />
                        <Link to={`/foods/${food.id}/recipes`}>
                            My {food.name} recipes
                        </Link>
                    <br />
                    <br />
                    </footer>
                </Card>
             </HomeContainer>
        )
    }
    else return (
      <HomeContainer>
        <h1>
        Loading...
    </h1>
    </HomeContainer>
    )
}

export default FoodDetail
