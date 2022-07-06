function Product(description, id) {
	this.description = description;
	this.id = id;
}

const p1 = new Product("Keyboard", 200);
const p2 = new Product("Mouse", 100);
console.log(p1, p2);

// Simulating new
function new2(fun, ...params) {
	const obj = {};
	obj.__proto__ = fun.prototype;
	fun.apply(obj, params);
	return obj;
}

const p3 = new2(Product, "Phone", 300);
const p4 = new2(Product, "Car", 20000);
console.log(p3, p4);
