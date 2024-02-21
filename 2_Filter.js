// Filter - Create a new array by keeping the items that return true.
var numbers = [3, 56, 2, 48, 5];
console.log(numbers);

const newNumbers3 = numbers.filter(function(num) {
  return num < 10;
});
console.log(newNumbers3);


var newNumbers = [];
numbers.forEach(function(num) {
  if (num < 10) {
    newNumbers.push(num);
  }
})
console.log(newNumbers);