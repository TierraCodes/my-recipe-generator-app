'use client'
import React from "react"
import { useState } from "react"

export default function Generate(){
    const [recipe, setRecipe] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const generatedRecipe = e.target.elements.recipe.value;
        setRecipe(generatedRecipe)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Create a Recipe!</h1>
                <div>
                    <label htmlFor="generatedRecipe">How many steps do you want?</label>
                    <input type="text" placeholder='3'/>
                    <button type="submit">Save</button>
                </div>
                <div>
                    <label htmlFor="name">What should we call it?</label>
                    <input type="text" placeholder="creation sensation"/>

                    <label htmlFor="image">Upload a picture!</label>
                    <input type="text" placeholder="pic/url"/>

                    <button type="submit">Save Recipe</button>
                </div>
            </form>
        </>
    )
}