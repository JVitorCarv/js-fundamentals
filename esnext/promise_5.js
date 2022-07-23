function workOrNot(value, errorChance) {
	return new Promise((resolve, reject) => {
		try {
			if (Math.random() < errorChance) {
				conso.log()
				reject("An error has occurred!")
			} else {
				resolve(value)
			}
		} catch (e) {
			reject(e)
		}
	})
}

workOrNot("It worked!", 0.1)
	.then((value) => console.log(value))
	//.then((value) => consol.log(value))
	.catch((error) => console.log(`Error: ${error}`))
