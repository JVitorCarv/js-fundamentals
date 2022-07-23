function randNumBetween(min, max, blacklist) {
	if (min > max) [max, min] = [min, max]

	return new Promise((resolve, reject) => {
		const rand = parseInt(Math.random() * (max - min + 1)) + min
		if (blacklist.includes(rand)) {
			reject("Repeated number!")
		} else {
			resolve(rand)
		}
	})
}

async function getRandList(qtNum) {
	try {
		const num_list = []
		for (let _ of Array(qtNum).fill()) {
			num_list.push(await randNumBetween(1, 60, num_list))
		}
		return num_list
	} catch (e) {
		throw "Repeated number in the list"
	}
}

randNumBetween(1, 5, [1, 2, 4]).then(console.log).catch(console.log)

getRandList(8).then(console.log).catch(console.log)
