const approved = ["a", "b", "c", "d"];

approved.forEach(function (name, index) {
	console.log(`${index + 1} - ${name}`);
});

approved.forEach((name) => console.log(name));

const printApproved = (approved) => console.log(approved);
approved.forEach(printApproved);
