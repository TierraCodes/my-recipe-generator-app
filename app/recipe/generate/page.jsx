'use client'
import React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Generate(){
    const router = useRouter()
    const [recipe, setRecipe] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const generatedRecipe = e.target.elements.recipe;
        setRecipe(generatedRecipe)
        router.push('/savedRecipes/')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Create a Recipe!</h1>
                <div>
                    <label>How many steps do you want?
                        <input type="text" name="steps" placeholder='3'/></label>
                </div>
                <div>
                    <label>What should we call it?
                        <input type="text" name="name" placeholder="creation sensation"/></label>
                </div>
                <div>
                    <label>How would you describe this dish?
                        <input type="text" name="description" placeholder="the yummiest ever"/></label>
                </div>
                <div>
                    <label>Upload a picture!
                        <input type="text" name="image" placeholder="pic/url"/></label>
                </div>
                <button type="submit">Save Recipe</button>
            </form>
        </>
    )
}