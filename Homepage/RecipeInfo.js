import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";


var id = ""; // This variable is unused and can be removed
const RecipeInfo = () =>{
    const [item, setItem] = useState(); 
    const {recipeId} = useParams();
  
    // Fetching recipe information based on recipeId
    if (recipeId !==" ") {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`).then(res => res.json()).then(data => {
            setItem(data.meals[0]);  
        })
    }
 
    return (
       
        <>
            
        {   
            /* Displaying the recipe information, including the meal thumbnail, meal details, ingredients, and instructions.*/
            (!item) ? "" : <div className="content">
                <img src={item.strMealThumb} alt="" />  
                <div className="inner-content">
                    <h1>{item.strMeal}</h1>    
                    <h2>{item.strArea} Food</h2>
                    <h3>Category: {item.strCategory}</h3>
                </div>
              
                <div className="recipe-details">
                    <div className="ingredients">
                        <h2>Ingredients</h2><br/>
                        <h5>{item.strIngredient1}: {item.strMeasure1}</h5>
                        <h5>{item.strIngredient2}: {item.strMeasure2}</h5>
                        <h5>{item.strIngredient3}: {item.strMeasure3}</h5>
                        <h5>{item.strIngredient4}: {item.strMeasure4}</h5>
                        <h5>{item.strIngredient5}: {item.strMeasure5}</h5>
                        <h5>{item.strIngredient6}: {item.strMeasure6}</h5>
                        <h5>{item.strIngredient7}: {item.strMeasure7}</h5>
                        <h5>{item.strIngredient8}: {item.strMeasure8}</h5>
                    </div>
                    <div className="instructions">
                        <h2>Instructions</h2><br/>
                        <p>{item.strInstructions}</p>
                    </div>
                </div>
            </div>
          
        }
    
     </>
    )
};


export default RecipeInfo;
