const fs = require("fs")
const path = require("path")

function readingFile(path) {
	return new Promise((resolve) => {
		fs.readFile(path, function (_, content) {
			resolve(content.toString())
		})
	})
}

const thePath = path.join(__dirname, "dados.txt")
readingFile(thePath).then(console.log)
