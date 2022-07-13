const fs = require("fs");

const product = {
	name: "Smartphone",
	price: 200,
	discount: 0.15
};

//prettier-ignore
fs.writeFile(__dirname + "/generatedFile.json", JSON.stringify(product), err => {
    console.log(err || 'Saved file')
});
