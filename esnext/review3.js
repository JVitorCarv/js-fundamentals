// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 };

console.log(Object.values(obj));
console.log(Object.entries(obj));

// Literal notation improvements
const fullName = "name";
const person = {
	fullName,
	hello() {
		return `Hello`;
	}
};
console.log(person.hello(), person.fullName);

// Class
class Animal {}
class Dog extends Animal {
	speak() {
		return "Woof";
	}
}

console.log(new Dog().speak());
