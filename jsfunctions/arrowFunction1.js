//1
let double = function (a) {
  return 2 * a;
};

//2
double = (a) => {
  return 2 * a;
};

//3
double = (a) => 2 * a;

console.log(double(2));

let hello = function () {
  return "Hello";
};

hello = () => "Hello";

console.log(hello());
