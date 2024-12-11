'use server'
import { PrismaClient } from "@prisma/client"

export default async function generateRecipe(data) {
    const prisma = new PrismaClient()

    await prisma.recipe.create({
        data: {
            name: String(data.get('name')),
            description: String(data.get('description')),
            image: String(data.get('image'))
        }
    })
}