const ferrari = {
	model: "F40",
	maxVel: 324
};

const volvo = {
	model: "V40",
	maxVel: 200
};

console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype);

console.log(Object.prototype.__proto__);

function myObj() {}
console.log(typeof Object, typeof myObj);
