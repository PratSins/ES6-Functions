// Find - find the first item that matches from an array.
console.log("\n---Find - find the first item that matches from an array.---\n")
var numbers = [3, 56, 2, 48, 5];
console.log(numbers);

const newNumber6 = numbers.find(function (num) {
  return num > 10;
})

console.log(newNumber6);