// let vs const

{
	var a = 1;
	var b = 2;
	console.log(b);
}
console.log(a);

// Template string
const product = "iPad";
console.log(`${product}`);

// Destructuring
const [l, e, ...tters] = "String";
console.log(l, e, tters);

const [x, , y] = [1, 2, 3];
console.log(x, y);

const { age, name: n } = { name: "Name", age: 10 };
console.log(age, n);
