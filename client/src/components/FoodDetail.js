import { useState, useEffect, useContext } from "react"
import { useParams, Link } from 'react-router-dom';
import { Card } from "../styled-components/styleIndex";
import FoodEditForm from "../forms/FoodEditForm";
import { UserContext } from '../context/user';

function FoodDetail() {
    const {id} = useParams()
    const [ food, setFood ] = useState({})
    const [ displayEdit, setDisplayEdit ] = useState(false)
    const [ saved, setSaved ] = useState(false)
    const { user, loggedIn } = useContext(UserContext)

    
    useEffect(() => {
        fetch (`/foods/${id}`)
        .then(response => response.json())
        .then(data => {
            console.log("fetched:", data)
            setFood(data)
        })
        .catch(err => alert(err))
        },[])

        useEffect(() => {
            fetch (`/foods/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log("fetched:", data)
                setFood(data)
            })
            .catch(err => alert(err))
            },[saved])

        

        const handleEditFood = (e) => {
            setDisplayEdit(true)
        }

        const handleSave = () => {
            setSaved(saved => !saved)
        }

        // let editButton
        // if (loggedIn === user.length !== 0 && user.id === food.user_id && displayEdit === false) {
        //     return editButton = <button onClick={handleEditFood}>Edit {food.name}</button>
        //  } else if (user.id !== food.user_id) {
        //     return editButton = <h5>You do not have access to edit this food.</h5>
        //  } else return editButton = null
        



  return (
    <div>
      <Card>
        <div key={food.id}>
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
                {(user.length !== 0 && user.id === food.user_id && displayEdit === false) ? <button onClick={handleEditFood}>Edit Food</button> : null}
                {displayEdit === false && user.id !== food.user_id ? <h5>You do not have access to edit this food.</h5> : null}
                {displayEdit ? <FoodEditForm food={food} setDisplayEdit={setDisplayEdit} handleSave={handleSave} /> : null}
                    <Link to={`/recipes/foods/${food.id}`}>
                    <ul>My {food.name} recipes</ul>
                    </Link>
                </footer>
              
            </div>
            </Card>
    </div>
  )

            // if (Object.keys(user).length === 0)
            // return <h1>Loading...</h1>
            // else if (user.id === food.user_id && displayEdit === false)
            //     return (
            //         <button onClick={handleEditFood}>Edit Food</button>
            //     )
            // else if (user.id === food.user_id && displayEdit === true)
            //     return (
            //     <FoodEditForm food={food} setDisplayEdit={setDisplayEdit} handleSave={handleSave} />
            // )
            // else return null
}

export default FoodDetail
