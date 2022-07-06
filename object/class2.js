class Grandfather {
	constructor(surname) {
		this.surname = surname;
	}
}

class Father extends Grandfather {
	constructor(surname, hairColor = "Black") {
		super(surname);
		this.hairColor = hairColor;
	}
}

class Son extends Father {
	constructor() {
		super("Silva");
	}
}

const son = new Son();
console.log(son);
