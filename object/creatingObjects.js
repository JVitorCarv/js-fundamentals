// Using literal notation
const obj1 = {
	// ...
};

// Using Object
const obj2 = new Object();

// Constructor functions
function Product(description, price, discount) {
	this.description = description; // Public
	this.getPriceWithDiscount = () => {
		return price * (1 - discount);
	};
}
const p1 = new Product("Keyboard", 200, 0.1);
console.log(p1);
console.log(p1.getPriceWithDiscount());

// Factory functions
function createEmployee(name, wage, absences) {
	return {
		name,
		wage,
		absences,
		getWage() {
			return (wage / 30) * (30 - absences);
		}
	};
}

const e1 = createEmployee("Bob", 8000, 4);
console.log(e1);
console.log(e1.getWage());

// Object.create
const anna = Object.create(null);
anna.name = "Anna";
console.log(anna);

// Parsing an object
const fromJSON = JSON.parse('{"info": "I am a JSON"}');
console.log(fromJSON.info);
