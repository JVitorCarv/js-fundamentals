console.log(typeof Object);

class Product {}
console.log(typeof Product);

function printSum(a, b) {
  console.log(a + b);
}

printSum(4, 5);

function sum(a = 0, b = 0) {
  return a + b;
}

console.log(sum(4, 5));
console.log(sum(2));
console.log(sum());
