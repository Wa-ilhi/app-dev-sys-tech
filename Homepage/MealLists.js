import React from "react";
import { useNavigate } from "react-router-dom";

// Component that displays a list of meals
const MealLists = ({ data }) => {
    console.log(data)   // Log the data prop
    let navigate = useNavigate();   // Hook from react-router-dom for navigation
    return (
        <>
                  // Display a message if data is not available
            {   
                (!data) ? "No Recipe Available" : data.map(item => {
                    return (
                        // Display a card for each item in the data array
                        <div className="card" key={item.idMeal} onClick={()=>navigate(`/${item.idMeal}`)}>  //The key attribute is used to keep track of individual elements in a list
                            <img src={item.strMealThumb} alt="" />  // This renders an img element that displays the meal thumbnail.                        
                            <h4>{item.strMeal}</h4> 
                        </div>
                    )
                })
            }

        </>
    )
};

// Exporting the MealLists component
export default MealLists;
