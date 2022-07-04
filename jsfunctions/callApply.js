function getPrice(tax = 0, currency = "$") {
	return `${currency} ${this.price * (1 - this.discount) * (1 + tax)}`;
}

const product = {
	name: "Notebook",
	price: 500,
	discount: 0.15,
	getPrice
};

global.price = 20;
global.discount = 0.1;
console.log(getPrice());
console.log(product.getPrice());
console.log(product.getPrice(0.04, "Yen"));

const car = { price: 20000, discount: 0.2 };

console.log(getPrice.call(car));
console.log(getPrice.apply(car));

console.log(getPrice.call(car, 0.03, "Yen"));
console.log(getPrice.apply(car, [0.02, "Yen"])); // Needs to be array
