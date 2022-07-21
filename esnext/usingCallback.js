const http = require("http");

const getClassroom = (letter, callback) => {
	const url = `http://files.cod3r.com.br/curso-js/turma${letter}.json`;
	http.get(url, (res) => {
		let result = "";

		res.on("data", (data) => {
			result += data;
		});

		res.on("end", () => {
			callback(JSON.parse(result));
		});
	});
};

let names = [];
getClassroom("A", (students) => {
	names = names.concat(students.map((s) => `A: ${s.nome}`));
	getClassroom("B", (students) => {
		names = names.concat(students.map((s) => `B: ${s.nome}`));
		getClassroom("C", (students) => {
			names = names.concat(students.map((s) => `C: ${s.nome}`));
			console.log(names);
		});
	});
});
