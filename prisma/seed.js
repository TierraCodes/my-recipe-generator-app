import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()


const initialCookingMethods = [
    { name: 'Sautee'},
    { name: 'Deep Fry'},
    { name: 'Bake'},
    { name: 'Microwave'},
    { name: 'Toast'},
    { name: 'Boil'},
];

const seed = async () => {
    await prisma.cookingMethods.deleteMany();

    for (const cookingMethods of initialCookingMethods){
        await prisma.cookingMethods.create({
            data:cookingMethods,
        });
    }
};

seed();