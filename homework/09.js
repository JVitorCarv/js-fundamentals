function createProduct(id, description, price) {
	return {
		id,
		description,
		price
	};
}

p1 = createProduct(1, "Hot Dog", 3);
p2 = createProduct(2, "Burger", 4);
p3 = createProduct(3, "Cheeseburger", 5.5);
p4 = createProduct(4, "Bauru", 7.5);
p5 = createProduct(5, "Soda", 3.5);
p6 = createProduct(6, "Juice", 2.8);
const menu = [p1, p2, p3, p4, p5, p6];

const newOrder = (id, qt) => {
	for (let i = 0; i < menu.length; i++) {
		if (id == menu[i].id) {
			price = (menu[i].price * qt).toFixed(2);
			return `R$ ${price}`;
		}
	}
	return "Id not found";
};

console.log(newOrder(7, 1));
console.log(newOrder(2, 3));
