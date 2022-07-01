// In JavaScript, functions are considered First-Class Objects (Citizens)
// Higher-order function

// Literal
function fun1() {}

// Storing in variable
const fun2 = function () {};

// Storing in array
const array1 = [fun1, fun2];
const array2 = [
  function (a, b) {
    return a + b;
  },
  fun1,
  fun2,
];
console.log(array2[0](2, 3));

// Storing in an object's attribute
const obj = {};
obj.exec = function () {
  return "Exec...";
};
console.log(obj.exec());

// Pass func as param
function run(fun) {
  fun();
}

run(function () {
  console.log("Fun");
});

// A function can return/contain another function
function sum(a, b) {
  return function (c) {
    console.log(a + b + c);
  };
}

sum(2, 3)(4);
const fivePlus = sum(2, 3);
fivePlus(4);
