'use client'
import { useRouter } from "next/navigation"
import { PrismaClient } from "@prisma/client"

export default async function SavedRecipes(){
    const Prisma = new PrismaClient()
    const router = useRouter()
    let recipes = await Prisma.recipe.findMany()

    const recipeList = recipes.map((recipeObject) =>
        <li key={recipeObject.id}>
            {recipeObject.name}
            <p>{recipeObject.image}</p>
            <p>{recipeObject.description}</p>
            {/* TODO: add some conditional rendering to expand to a full recipe page */}
        </li>
    )
    return (
        <>
            <h1>Saved Recipes</h1>
            <div>{recipeList}</div>
            <button onClick={()=> router.push('./recipe/generate')}>Add another Recipe</button>
        </>
    )
}
