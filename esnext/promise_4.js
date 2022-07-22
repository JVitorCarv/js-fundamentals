function randNumBetween(min, max, time) {
	if (min > max) [max, min] = [min, max]

	return new Promise((resolve) => {
		setTimeout(function () {
			const rand = parseInt(Math.random() * (max - min + 1)) + min
			resolve(rand)
		}, time)
	})
}

console.time("promise")

function getManyNums() {
	return Promise.all([
		randNumBetween(1, 10, 3500),
		randNumBetween(1, 10, 500),
		randNumBetween(1, 10, 1000),
		randNumBetween(1, 10, 2000)
	])
}

getManyNums()
	.then(console.log)
	.then(() => {
		console.timeEnd("promise")
	})
