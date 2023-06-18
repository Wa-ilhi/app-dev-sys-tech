import React from "react";
import { useNavigate } from "react-router-dom";

const MealLists = ({ data }) => {
    console.log(data)
    let navigate = useNavigate();
    return (
        <>
            {
                (!data) ? "No Recipe Available" : data.map(item => {
                    return (
                        <div className="card" key={item.idMeal} onClick={()=>navigate(`/${item.idMeal}`)}>
                            <img src={item.strMealThumb} alt="" />
                            <h4>{item.strMeal}</h4>
                        </div>
                    )
                })
            }

        </>
    )
};


export default MealLists;
