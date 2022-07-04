function Car(maxSpeeed = 200, delta = 5) {
	let velocity = 0;
	//let or const means private

	//this means public
	this.accelerate = function () {
		if (velocity + delta <= maxSpeeed) {
			velocity += delta;
		} else {
			velocity = maxSpeeed;
		}
	};

	this.getVelocity = function () {
		return velocity;
	};
}

const uno = new Car();
console.log(uno.getVelocity());
uno.accelerate();
console.log(uno.getVelocity());

const ferrari = new Car(350, 20);
ferrari.accelerate();
console.log(ferrari.getVelocity());
