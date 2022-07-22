setTimeout(function () {
	console.log("Callback...")

	setTimeout(function () {
		console.log("Callback...")
	}, 2000)
}, 2000)

function waitFor(time = 2000) {
	return new Promise(function (resolve) {
		setTimeout(function () {
			console.log("Executing promise...")
			resolve("Resolve")
		}, time)
	})
}

waitFor(3000)
	.then(() => waitFor())
	.then((text) => console.log(text))
