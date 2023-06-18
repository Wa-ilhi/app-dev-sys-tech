import React from "react";

// Component that represents an index of recipes
const RecipeIndex = ({ inorderlistsIndex }) => {
    // Array of alphabetical order lists
    const inorderlists = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    var num = 0;    // Variable to track a unique key value
    return (
        <>
             // Iterate over each item in the inorderlists array 
            {
                inorderlists.map(item => {
                    return (
                        <div className="numBox" key={num++} onClick={() => inorderlistsIndex(item)}>
                            <h3>{item}</h3>
                        </div>
                    )
                })
            }
        </>
    )
};

export default RecipeIndex;
