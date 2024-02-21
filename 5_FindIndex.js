// FindIndex - find the index of the first item that matches.


var numbers = [3, 3, 56, 2, 48, 5];
console.log(numbers);


const newNumber7 = numbers.findIndex(function (num) {
  return num > 10;
})

console.log(newNumber7);