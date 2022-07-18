// Arrow function
const sum = (a, b) => a + b;
console.log(sum(2, 3));

// Arrow function (this)
const l1 = () => console.log(this === exports);
const l2 = l1.bind({});
l1();
l2();

// Default params
function log(text = "Node") {
	console.log(text);
}

log(undefined);

// Rest operator
function total(...numbers) {
	let total = 0;
	numbers.forEach((n) => (total += n));
	return total;
}
console.log(total(2, 3, 4, 5));
