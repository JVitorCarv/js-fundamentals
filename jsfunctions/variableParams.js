function sum() {
  let sum = 0;
  for (let i in arguments) {
    if (typeof arguments[i] == "number") {
      sum += arguments[i];
    }
  }
  return sum;
}

console.log(sum());
console.log(sum(1));
console.log(sum(2, 3, 4));
console.log(sum(2, 3, "Text"));
console.log(sum("a", "b", "c"));
