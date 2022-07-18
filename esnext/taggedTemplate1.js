function tag(parts, ...values) {
	console.log(parts);
	console.log(values);
	return "Another string";
}

const student = "Student";
const situation = "Approved";
console.log(tag`${student} is ${situation}`);
