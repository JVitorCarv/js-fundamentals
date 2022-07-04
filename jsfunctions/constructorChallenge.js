function Customer(name) {
	this.name = name;

	this.speak = function () {
		console.log(`My name is ${this.name}`);
	};
}

const c1 = new Customer("Anna");
c1.speak();
