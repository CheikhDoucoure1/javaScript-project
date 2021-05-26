
function randomMeal(){
    const meals = ['breakfast','brunch','lunch','dinner'];
    const mealChoice= Math.floor(Math.random() * meals.length);
    return meals[mealChoice];
}
//this is a more specific function for the random meal generator
console.log(randomMeal())