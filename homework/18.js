function invertKeysValues(obj) {
	const newObj = {};
	let entries = Object.entries(obj);
	entries.forEach((e) => (newObj[e[1]] = e[0]));
	return newObj;
}

console.log(invertKeysValues({ a: 1, b: 2, c: 3 }));
