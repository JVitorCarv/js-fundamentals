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

console.log(students);

//prettier-ignore
const result = students.map((s) => s.grade).reduce(function (previousValue, currentValue) {
		console.log(previousValue, currentValue);
		return previousValue + currentValue;
}, 10);

console.log(result);
