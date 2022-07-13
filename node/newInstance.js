// By default, node creates a single instance of the export
// To dodge this, we can create a factory function
module.exports = () => {
	return {
		value: 1,
		inc() {
			this.value++;
		}
	};
};
