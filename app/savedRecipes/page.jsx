import { useRouter } from "next/navigation"

export default async function SavedRecipes(){
    const router = useRouter()
    let recipes = await Prisma.recipe.findMany()

    const recipeList = recipes.map((recipeObject) =>
        <li key={recipeObject.id}>
            {recipeObject.name}
            
        </li>
    )
    return (
        <>
            <h1>Saved Recipes</h1>
            <div>{recipeList}</div>
            <button onClick={()=> router.push('./recipe/generate')}>Add a Recipe</button>
        </>
    )
}
