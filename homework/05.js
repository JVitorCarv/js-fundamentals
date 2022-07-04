const numFormat = (num) => {
	result = `R$ ${num.toFixed(2).toString().replace(".", ",")}`;
	return result;
};

console.log(numFormat(0.1 + 0.2));
