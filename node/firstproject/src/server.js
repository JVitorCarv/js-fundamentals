const port = 3003;

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const savedData = require("./savedData");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/products", (req, res, next) => {
	console.log("Middleware 1 - Getting products...");
	next();
});

//.use = all req
/*
app.use((req, res, next) => {
	res.send({ default: ".use was activated" });
});
*/

app.get("/products", (req, res, next) => {
	res.send(savedData.getProducts()); // Converts to JSON
});

app.get("/products/:id", (req, res, next) => {
	res.send(savedData.getProduct(req.params.id));
});

app.post("/products", (req, res, next) => {
	const product = savedData.saveProduct({
		name: req.body.name,
		price: req.body.price
	});
	res.send(product);
});

app.put("/products/:id", (req, res, next) => {
	const product = savedData.saveProduct({
		id: req.params.id,
		name: req.body.name,
		price: req.body.price
	});
	res.send(product);
});

app.delete("/products/:id", (req, res, next) => {
	const product = savedData.deleteProduct(req.params.id);
	res.send(product);
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
