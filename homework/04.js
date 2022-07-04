const divide = (div1, div2) => {
	return [Math.floor(div1 / div2), div1 % div2];
};

let results = divide(42, 5);
console.log(`Result: ${results[0]}\nRest: ${results[1]}`);
