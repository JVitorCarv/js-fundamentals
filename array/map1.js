const nums = [1, 2, 3, 4, 5];

let result = nums.map(function (e) {
	return e * 2;
});

console.log(result);

const plus10 = (e) => e + 10;
const triple = (e) => e * 3;
const numFormat = (e) => `R$ ${parseFloat(e).toFixed(2).replace(".", ",")}`;

result = nums.map(plus10).map(triple).map(numFormat);
console.log(result);
