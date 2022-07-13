const port = 3003;

const express = require("express");
const app = express();

app.get("/products", (req, res, next) => {
	console.log("Middleware 1...");
	next();
});

//.use = all req
/*
app.use((req, res, next) => {
	res.send({ default: ".use was activated" });
});
*/

app.get("/products", (req, res, next) => {
	res.send({ name: "Notebook", price: 123.45 }); // Converts to JSON
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
