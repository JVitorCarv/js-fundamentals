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
