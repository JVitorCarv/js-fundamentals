function dollar(parts, ...values) {
	const result = [];
	values.forEach((value, index) => {
		value = isNaN(value) ? value : `$${value.toFixed(2)}`;
		result.push(parts[index], value);
	});
	return result.join("");
}

const price = 29.99;
const installmentPrice = 11;
console.log(dollar`1x ${price} or 3x ${installmentPrice}`);
