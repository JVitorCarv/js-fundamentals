const school = [
	{
		name: "Classroom N1",
		students: [
			{
				name: "Bob",
				grade: 8.1
			},
			{
				name: "Martin",
				grade: 9.3
			}
		]
	},
	{
		name: "Classroom N2",
		students: [
			{
				name: "Kent",
				grade: 8.9
			},
			{
				name: "Fred",
				grade: 7.3
			}
		]
	}
];

const getStudentGrade = (s) => s.grade;
const getClassroomGrades = (c) => c.students.map(getStudentGrade);

const grades1 = school.map(getClassroomGrades);
console.log(grades1);

Array.prototype.flatMap2 = function (callback) {
	return Array.prototype.concat.apply([], this.map(callback));
};

const grades2 = school.flatMap2(getClassroomGrades);
console.log(grades2);
