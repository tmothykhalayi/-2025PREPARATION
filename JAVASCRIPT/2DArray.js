let fruits = ["apple", "oranges", "lemons"];
let vegetables = ["kales", "cabbage", "spinach"];
let meat = ["pork", "chicken", "beef"];

// Use a valid variable name for groceryList
let groceryList = [fruits, vegetables, meat];

for (let list of groceryList) {
  for (let food of list) {
    console.log(food);
  }
}
