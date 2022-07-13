// By default, node creates a single instance of the export
module.exports = {
	value: 1,
	inc() {
		this.value++;
	}
};
