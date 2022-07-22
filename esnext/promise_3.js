function randNumBetween(min, max) {
	if (min > max) {
		;[max, min] = [min, max]
	}

	return new Promise((resolve) => {
		const rand = parseInt(Math.random() * (max - min + 1)) + min
		resolve(rand)
	})
}

randNumBetween(10, 30)
	.then((num) => num * 10)
	.then((numX10) => `The number generated was ${numX10}`)
	.then(console.log)
	.then(() => randNumBetween(1, 3))
	.then(console.log)
