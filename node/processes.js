const flag = process.argv.indexOf("-a") !== -1;
console.log(flag);

if (flag) {
	process.stdout.write("Hello, Flag!\n");
	process.exit();
} else {
	process.stdout.write("Inform your name: ");
	process.stdin.on("data", (data) => {
		const name = data.toString().replace("\n", "");
		process.stdout.write(`Hello, ${name}\n`);
		process.exit();
	});
}
