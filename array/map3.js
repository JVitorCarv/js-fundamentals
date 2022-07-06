Array.prototype.map2 = function (callback) {
	let temp = [];
	for (let i = 0; i < this.length; i++) {
		temp.push(callback(this[i]));
	}
	return temp;
};

const cart = [
	'{ "name": "A" , "price": 3.45 }',
	'{ "name": "B" , "price": 13.90 }',
	'{ "name": "C" , "price": 41.22 }',
	'{ "name": "D" , "price": 7.50 }'
];

const parseCartItems = (e) => JSON.parse(e);
const getPrice = (e) => e.price;

let result = cart.map(parseCartItems).map(getPrice);
console.log(result);

let result2 = cart.map2(parseCartItems).map2(getPrice);
console.log(result2);
