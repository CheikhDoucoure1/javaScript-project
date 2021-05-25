const meals = ['breakfast','brunch','lunch','dinner'];

function randomMeal(meal){
    const mealChoice= Math.floor(Math.random() * meal.length);
    return meal[mealChoice];
}

const result = randomMeal(meals);
console.log(result);