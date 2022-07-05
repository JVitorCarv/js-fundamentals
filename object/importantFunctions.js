const someone = {
	name: "William",
	age: 20,
	weight: 200
};

console.log(Object.keys(someone));
console.log(Object.values(someone));
console.log(Object.entries(someone));

Object.entries(someone).forEach((e) => {
	console.log(`${e[0]} - ${e[1]}`);
});

Object.entries(someone).forEach(([key, value]) => {
	console.log(`${key} = ${value}`);
});

Object.defineProperty(someone, "birthday", {
	enumerable: true,
	writable: false,
	value: "01/01/2000"
});

someone.birthday = "12/12/2222";
console.log(someone.birthday);
console.log(Object.keys(someone));

const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 }; // a will be overwritten
const obj = Object.assign(dest, o1, o2);
console.log(obj);
