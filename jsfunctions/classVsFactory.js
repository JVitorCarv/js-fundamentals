class Customer {
	constructor(name) {
		this.name = name;
	}

	speak() {
		console.log(`My name is ${this.name}`);
	}
}

const c1 = new Customer("Anna");
c1.speak();

const createCustomer = (name) => {
	return {
		speak: () => console.log(`My name is ${name}`)
	};
};

const c2 = createCustomer("Bob");
c2.speak();
