const inverse = (param) => {
	if (typeof param === "number") {
		return -param;
	} else if (typeof param === "boolean") {
		return !param;
	} else {
		return `Boolean or number expected, but the param is of type ${typeof param}`;
	}
};

console.log(inverse(true));
console.log(inverse("6"));
console.log(inverse(-2000));
console.log(inverse("Programmer"));
console.log(inverse({ name: "Object" }));
