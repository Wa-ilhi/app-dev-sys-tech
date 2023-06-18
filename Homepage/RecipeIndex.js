import React from "react";

const RecipeIndex = ({ inorderlistsIndex }) => {
    const inorderlists = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    var num = 0;
    return (
        <>
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
