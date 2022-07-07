const createProduct = (name, price, fragile) => {
	return {
		name,
		price,
		fragile
	};
};

const products = [
	createProduct("Notebook", 1000, true),
	createProduct("Tablet", 200, true),
	createProduct("Glass cup", 5, true),
	createProduct("Wood plank", 5, false)
];

const onlyFragile = (p) => p.fragile;
const onlyExpensive = (p) => p.price >= 200;

console.log(products.filter(onlyFragile).filter(onlyExpensive));
