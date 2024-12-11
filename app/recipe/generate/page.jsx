'use client'
import React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Generate(){
    const router = useRouter()
    const [recipe, setRecipe] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const generatedRecipe = e.target.elements.recipe.value;
        setRecipe(generatedRecipe)
        router.push('./savedRecipes')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Create a Recipe!</h1>
                <div>
                    <label htmlFor="generatedRecipe">How many steps do you want?</label>
                    <input type="text" placeholder='3'/>
                </div>
                <div>
                    <label htmlFor="name">What should we call it?</label>
                    <input type="text" placeholder="creation sensation"/>
                </div>
                <div>
                    <label htmlFor="description">How would you describe this dish?</label>
                    <input type="text" placeholder="the yummiest ever"/>
                </div>
                <div>
                    <label htmlFor="image">Upload a picture!</label>
                    <input type="text" placeholder="pic/url"/>
                </div>
                <button type="submit">Save Recipe</button>
            </form>
        </>
    )
}