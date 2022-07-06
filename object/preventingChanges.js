/* Object.preventExtensions = can't add new attributes,
but still can change existing attributes and delete */

const product = Object.preventExtensions({
	name: "Phone",
	price: 200,
	tag: "Sale"
});

console.log(Object.isExtensible(product));

product.name = "NewName";
product.description = "This would be a new attribute";
delete product.tag;
console.log(product);

/* Object.seal = can't add new attributes, and can't
delete any of the existing ones */
const person = { name: "Name", age: 19 };
Object.seal(person);
console.log("Sealed: ", Object.isSealed(person));

person.height = 2;
delete person.name;
person.age = 29;
console.log(person);
