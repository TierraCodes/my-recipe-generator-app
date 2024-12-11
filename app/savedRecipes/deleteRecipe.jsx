'use server'
import { PrismaClient } from "@prisma/client"

export default async function deleteRecipe(data) {
    const Prisma = new PrismaClient();

    await Prisma.recipe.delete({
        where: {id: Number(data.get('id'))}
    })
}