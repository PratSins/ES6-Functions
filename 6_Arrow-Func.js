var numbers = [3, 56, 2, 48, 5];
console.log("Original Array  ---- ", numbers);

const newNumbers = numbers.map(x => x * x);
console.log("Squared Array  ---- ", newNumbers);


//Map -Create a new array by doing something with each item in an array.
const newNumbers1 = numbers.map( x => x * 2);
console.log("Doubled Array  ---- ", newNumbers1);

//Filter - Create a new array by keeping the items that return true.
const newNumbers2 = numbers.filter(num => num < 10);
console.log("Elements smaller than 10  ---- ", newNumbers2);

//Reduce - Accumulate a value by doing something to each item in an array.
const newNumber3 = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber);
console.log("Sum of all elements  ---- ", newNumber3);

//Find - find the first item that matches from an array.
const newNumber4 = numbers.find(num => num > 10);
console.log("First element gt 10  ---- ", newNumber4);

//FindIndex - find the index of the first item that matches.
const newNumber5 = numbers.findIndex(num => num > 10);
console.log("Index of First element gt 10  ---- ", newNumber5);