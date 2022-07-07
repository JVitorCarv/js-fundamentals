Array.prototype.reduce2 = function (callback, initValue) {
	const firstIndex = initValue ? 0 : 1;
	let sum = initValue || this[0];
	for (let i = firstIndex; i < this.length; i++) {
		sum = callback(sum, this[i], i, this);
	}
	return sum;
};

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

const allHaveDiscount = discountValues.reduce2(
	(previous, current) => previous && current
);

console.log(allHaveDiscount);

const anyHasDiscount = discountValues.reduce2(
	(previous, current) => previous || current
);

console.log(anyHasDiscount);

const grades = students.map((s) => s.grade);

const sum = (previous, current) => previous + current;
const gradeSum = grades.reduce2(sum);
const sumPlus10 = grades.reduce2(sum, 10);

console.log(gradeSum);
console.log(sumPlus10);
