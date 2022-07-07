const createStudent = function (name, grade, discount) {
	return {
		name,
		grade,
		discount
	};
};

const students = [
	createStudent("John", 7.3, false),
	createStudent("Joanne", 9.2, true),
	createStudent("Peter", 9.8, false),
	createStudent("Mary", 8.7, true)
];

const discountValues = students.map((s) => s.discount);

const allHaveDiscount = discountValues.reduce(
	(previous, current) => previous && current
);

console.log(allHaveDiscount);

const anyHasDiscount = discountValues.reduce(
	(previous, current) => previous || current
);

console.log(anyHasDiscount);
