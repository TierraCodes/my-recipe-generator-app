const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


const initialCookingMethods = [
    { name: 'Sautee',   length: '5 minutes'},
    { name: 'Toast',    length: '2 minutes'},
    { name: 'Bake',     length: '30 minutes'},
];

const initialIngredients = [
    { name: 'Butter',  amount: '4 tablespoons'},
    { name: 'Flour',   amount: '2 cups'},
    { name: 'Sugar',   amount: '1 cup'},
]

const seed = async () => {
    await prisma.cookingMethod.deleteMany();
    for (const cookingMethod of initialCookingMethods){
        await prisma.cookingMethod.createMany({
            data: cookingMethod,
        });
    }

    await prisma.ingredient.deleteMany();
    for (const ingredient of initialIngredients){
        await prisma.ingredient.createMany({
            data: ingredient,
        });
    }
};

seed();