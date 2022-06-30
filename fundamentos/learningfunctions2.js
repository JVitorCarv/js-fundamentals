// Stores a function in a variable
const printSum = function (a, b) {
  console.log(a + b);
};

printSum(5, 3);

// Stores an arrow function in a variable
const sum = (a = 0, b = 0) => {
  return a + b;
};

console.log(sum(8, 7));
console.log(sum());

// Implicit return
const subtraction = (a = 0, b = 0) => a - b;

console.log(subtraction(1, 3));

const printSomething = (some) => console.log(some);
printSomething("Something");
