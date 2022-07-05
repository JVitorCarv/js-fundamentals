const a = 1;
const b = 2;
const c = 3;

const obj1 = { a: a, b: b, c: c };
const obj2 = { a, b, c };
console.log(obj1, obj2);

const nameAttr = "Grade";
const valueAttr = 8;

const obj3 = {};
obj3[nameAttr] = valueAttr;
console.log(obj3);

const obj4 = { [nameAttr]: valueAttr };
console.log(obj4);

const obj5 = {
	fun1: function () {
		// ...
	},
	fun2() {
		// ...
	}
};
console.log(obj5);
