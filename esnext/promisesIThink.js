let hello = new Promise((resolve) => {
	resolve("Hello");
});

hello
	.then((greeting) => greeting.concat("!"))
	.then((greeting) => console.log(greeting));
