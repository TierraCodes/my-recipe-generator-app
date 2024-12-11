import { PrismaClient } from "@prisma/client";
import updateRecipe from "@/app/updateRecipes";
import Update from './update'

export default async function editRecipes({props}) {
    const prisma = new PrismaClient()
    
    const video = await prisma.recipe.findUnique({
        where: { id: Number(props.id) }
    })

    return (
        <div>
            <h2>Update Recipe: </h2>
            <Update updateName={updateRecipe}/>
        </div>
    );
}