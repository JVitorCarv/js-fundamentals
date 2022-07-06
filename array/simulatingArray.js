const almostArray = { 0: "1", 1: "2", 2: "3" };
console.log(almostArray);
Object.defineProperty(almostArray, "toString", {
	value: function () {
		return Object.values(this);
	},
	enumerable: false
});

console.log(almostArray[0]);
