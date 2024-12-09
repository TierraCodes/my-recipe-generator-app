const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


const initialCookingMethods = [
    { id: 1,    name: 'sautee',   length: '5 minutes'},
    { id: 2,    name: 'toast',    length: '2 minutes'},
    { id: 3,    name: 'bake',     length: '30 minutes'},
]

const initialIngredients = [
    { id: 1,    name: 'butter',  amount: '4 tablespoons'},
    { id: 2,    name: 'flour',   amount: '2 cups'},
    { id: 3,    name: 'sugar',   amount: '1 cup'},
]

const initialPreparationMethods = [
    { id: 1,    name: 'whip',   length: '5 minutes'},
    { id: 2,    name: 'blend',    length: 'until fully incorporated'},
    { id: 3,    name: 'chop',     length: 'until minced'},
]

const initialEquipment = [
    { id: 1,    name: 'stand-mixer'},
    { id: 2,    name: 'blender'},
    { id: 3,    name: 'mixing bowl'},
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

    await prisma.preparationMethod.deleteMany();
    for (const preparationMethod of initialPreparationMethods){
        await prisma.preparationMethod.createMany({
            data: preparationMethod,
        });
    }

    await prisma.equipment.deleteMany();
    for (const equipment of initialEquipment){
        await prisma.equipment.createMany({
            data: equipment,
        });
    }
};

seed();