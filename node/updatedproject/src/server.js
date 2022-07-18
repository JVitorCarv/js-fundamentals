const port = 3003;

const express = require("express");
const db = require("./simulatedDb");

const app = express();
app.use(express.json());
app.use(
	express.urlencoded({
		extended: true
	})
);

app.get("/products", (req, res, next) => {
	res.send(db.getProducts());
});

app.get("/products/:id", (req, res, next) => {
	res.send(db.getProduct(req.params.id));
});

app.post("/products", (req, res, next) => {
	const product = db.saveProduct({
		name: req.body.name,
		price: req.body.price
	});
	res.send(product);
});

app.delete("/products/:id", (req, res, next) => {
	res.send(db.deleteProduct(req.params.id));
});

app.put("/products/:id", (req, res, next) => {
	const product = db.saveProduct({
		name: req.body.name,
		price: req.body.price,
		id: req.params.id
	});
	res.send(product);
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
