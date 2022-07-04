// Simple factory
// Factory is a function that returns an object

function createCustomer() {
	return {
		name: "Bob",
		surname: "Surname"
	};
}

console.log(createCustomer());

function createProduct(name, price) {
	return {
		name,
		price,
		discount: 0.05
	};
}

const product = createProduct("Keyboard", 200);
console.log(product);
