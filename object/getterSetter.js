const sequence = {
	_value: 1,
	get value() {
		return this._value++;
	},
	set value(informedValue) {
		if (informedValue > this._value) {
			this._value = informedValue;
		}
	}
};

console.log(sequence.value, sequence.value); // JS understands as if you're trying to use getter
sequence.value = 1000; // JS understands as if you're trying to use setter
console.log(sequence.value, sequence.value);
sequence.value = 900;
console.log(sequence.value);
