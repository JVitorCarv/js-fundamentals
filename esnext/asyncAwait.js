const http = require("http");

const getClassroom = (letter) => {
	const url = `http://files.cod3r.com.br/curso-js/turma${letter}.json`;
	return new Promise((resolve, reject) => {
		http.get(url, (res) => {
			let result = "";

			res.on("data", (data) => {
				result += data;
			});

			res.on("end", () => {
				try {
					resolve(JSON.parse(result));
				} catch (e) {
					reject(e);
				}
			});
		});
	});
};

// Made to simplify the use of promises
let getClassrooms = async () => {
	const ca = await getClassroom("A");
	const cb = await getClassroom("B");
	const cc = await getClassroom("C");
	return [].concat(ca, cb, cc);
}; // returns asyncFcuntion object

getClassrooms()
	.then((students) => students.map((s) => s.nome))
	.then((names) => console.log(names));
