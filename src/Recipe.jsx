import React from 'react'
import './App.css'

const Recipe = ({title, calories, image, ingredients,url}) => {
    return(
        <div className="recipe">
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
         <a href={url} target="_blank" rel="noopener noreferrer">
             Full Recipe
            </a>
            <p>Calories : {calories}</p>
            <img className="image" src={image} alt=""/>

        </div>
    )
}

export default Recipe