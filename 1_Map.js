var numbers = [3, 56, 2, 48, 5];
console.log(numbers);

// Map - Create a new array by doing something with each item in an array.

function double(x) {
  return x * 2;
}
const newNumbers1 = numbers.map(double);
console.log(newNumbers1);

var newNumbers2 = [];
numbers.forEach(function (x) {
  newNumbers2.push(x * 2);
});
console.log(newNumbers2);

newNumbers2 = numbers.map(function (x) {
  return x * 2;
});

console.log(newNumbers2);