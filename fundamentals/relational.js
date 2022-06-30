console.log("01 - ", "1" == 1); // Compares values
console.log("02 - ", "1" === 1); // Strict equality
console.log("03 - ", "3" != 3);
console.log("04 - ", "3" !== 3);

console.log("05 - ", 3 > 2);
console.log("06 - ", 3 >= 2);

const d1 = new Date(0);
const d2 = new Date(0);
console.log("07 - ", d1 == d2);
console.log("08 - ", d1 === d2);
console.log("09 - ", d1.getTime() === d2.getTime());

console.log("11 - ", undefined == null);
console.log("12 - ", undefined === null);