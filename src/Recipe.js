import React from 'react';
import './App.css'

function Recipe ({title, image, ingredients}) {
    return (
        <div>
            <h1 className='title'>{title}</h1>
            <ol className='List'>
                    {ingredients.map((ingredient,id) => (
                        <li key={id}>{ingredient.text}</li>
                    ))}
            </ol>
            <img className='image' src={image} />
                
        </div> 
    );
}
export default Recipe;