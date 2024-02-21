// Reduce - Accumulate a value by doing something to each item in an array.

var numbers = [3, 56, 2, 48, 5];
console.log(numbers);

var newNumber4 = numbers.reduce(function (accumulator, currentNumber) {
  console.log("accumulator = " + accumulator);
  console.log("currentNumber = " + currentNumber);
    return accumulator + currentNumber;
})

console.log(newNumber4);

var newNumber5 = 0;
numbers.forEach(function (currentNumber) {
  newNumber5 += currentNumber
})
console.log(newNumber5);