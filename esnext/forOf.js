for (let letter of "String") {
	console.log(letter);
}

const ecmaTopics = ["Map", "Set", "Promise"];

for (let i in ecmaTopics) {
	console.log(i);
}

for (let i of ecmaTopics) {
	console.log(i);
}

const topicsMap = new Map([
	["Map", { studied: true }],
	["Set", { studied: true }],
	["Promises", { studied: false }]
]);

for (let topic of topicsMap) {
	console.log(topic);
}

for (let key of topicsMap.keys()) {
	console.log(key);
}

for (let value of topicsMap.values()) {
	console.log(value);
}

for (let [key, value] of topicsMap.entries()) {
	console.log(key, value);
}

const s = new Set(["a", "b", "c"]);
for (let letter of s) {
	console.log(letter);
}
