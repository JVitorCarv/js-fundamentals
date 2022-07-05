const father = { name: "Peter", hairColor: "Black" };

const daughter1 = Object.create(father);
daughter1.name = "Anna";
console.log(daughter1.hairColor);

const daughter2 = Object.create(father, {
	name: { value: "Elizabeth", writable: false, enumerable: true }
});
console.log(daughter2.name);
daughter2.name = "Liz";
console.log(`${daughter2.name} has a ${daughter2.hairColor} hair`);

console.log(Object.keys(daughter1));
console.log(Object.keys(daughter1));

for (let key in daughter2) {
	daughter2.hasOwnProperty(key)
		? console.log(`Own property: ${key}`)
		: console.log(`By inheritance: ${key}`);
}
