// Inheritance chain
Object.prototype.attr0 = "Z";
const grandpa = { attr1: "A" };
const father = { __proto__: grandpa, attr2: "B", attr3: 3 };
const son = { __proto__: father, attr3: "C" };
/* The most immediate attribute with the same name in the chain
will overwrite previous attributes */

console.log(son.attr0, son.attr1, son.attr2, son.attr3, father.attr3);

const car = {
	velocity: 0,
	maxVel: 200,
	accelerate(delta) {
		if (this.velocity + delta > this.maxVel) {
			this.velocity = this.maxVel;
		} else {
			this.velocity += delta;
		}
	},
	status() {
		return `${this.velocity}km/h de ${this.maxVel}km/h`;
	}
};

const ferrari = {
	model: "F40",
	maxVel: 324 // Shadowing
};

const volvo = {
	model: "V40",
	status() {
		return `${this.model}: ${super.status()}`;
	}
};

Object.setPrototypeOf(ferrari, car);
Object.setPrototypeOf(volvo, car);

volvo.accelerate(100);
console.log(volvo.status());

ferrari.accelerate(300);
console.log(ferrari.status());
