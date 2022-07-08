function createItem(name = "", tag = "", price = 0) {
	return {
		name,
		tag,
		price
	};
}

function calcSum(arr) {
	let sum = 0;
	arr.forEach((obj) => (sum += obj.price));
	return sum;
}

console.log(
	calcSum([
		createItem("news", "information", 89.99),
		createItem("cinema", "entertainment", 150)
	])
);

console.log(
	calcSum([
		createItem("Galaxy S20", "electronics", 3599.99),
		createItem("Macbook Pro", "electronics", 30999.9)
	])
);
