const verifyTriangle = (a, b, c) => {
	if (a == b && b == c) {
		return "Equilateral";
	} else if (a == b || b == c || a == c) {
		return "Isosceles";
	}
	return "Scalene";
};

console.log(verifyTriangle(1, 2, 3));
console.log(verifyTriangle(1, 2, 2));
console.log(verifyTriangle(1, 1, 3));
console.log(verifyTriangle(1, 1, 1));
