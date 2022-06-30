const weight1 = 1.0;
const weight2 = Number("2.0");
console.log(weight1, weight2);
console.log(Number.isInteger(weight1));
console.log(Number.isInteger(weight2));

const av1 = 9.871;
const av2 = 6.871;

const total = av1 * weight1 + av2 * weight2;
const avg = total / (weight1 + weight2);

console.log(avg);
console.log(typeof avg);
console.log(avg.toFixed(2));
console.log(avg.toString(2));

console.log("10" / 2);
console.log(0.1 + 0.7);
