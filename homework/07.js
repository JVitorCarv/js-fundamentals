const equation = (a, b, c) => {
	let delta = b ** 2 - 4 * a * c;
	if (delta < 0) {
		return "Delta é negativo";
	}
	let result = [];
	let x1 = (-b + Math.sqrt(delta)) / (2 * a);
	let x2 = (-b - Math.sqrt(delta)) / (2 * a);
	result.push(x1, x2);

	return result;
};

console.log(equation(1, 3, 2));
console.log(equation(3, 1, 2));
