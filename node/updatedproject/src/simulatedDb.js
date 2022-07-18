const sequence = {
	_id: 1,
	get id() {
		return this._id++;
	}
};

const products = [];

function getProducts() {
	return Object.values(products);
}

function getProduct(id) {
	return products[id];
}

function saveProduct(product) {
	if (!product.id) product.id = sequence.id;
	products[product.id] = product;
	return product;
}

function deleteProduct(id) {
	const delProduct = products[id];
	delete products[id];
	return delProduct;
}

module.exports = { getProduct, getProducts, saveProduct, deleteProduct };
