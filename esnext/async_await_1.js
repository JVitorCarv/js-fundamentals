function waitFor(time = 2000) {
	return new Promise(function (resolve) {
		setTimeout(() => resolve(), time)
	})
}

waitFor(1000)
	.then(() => console.log("1...")) // it awaits
	.then(waitFor)
	.then(console.log("2...")) // it prints right away
	.then(waitFor)
	.then(console.log("3..."))

function returnValue() {
	return new Promise((resolve) => {
		setTimeout(() => resolve(10), 5000)
	})
}

async function exec() {
	let value = await returnValue()

	await waitFor()
	console.log(`Async/Await ${value}...`)
	await waitFor()
	console.log(`Async/Await ${value + 1}...`)
	await waitFor()
	console.log(`Async/Await ${value + 2}...`)

	return value + 3
}

exec().then(console.log)

async function execWait() {
	const value = await exec()
	console.log(value)
}

execWait()
