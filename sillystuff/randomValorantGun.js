const gunList = require("./gunList.json");
const maxMoney = 9000;

function getAvailableGuns(maxPrice, description) {
	let availableGuns = gunList.filter((e) => e.price <= maxPrice);
	if (description) {
		availableGuns = availableGuns.filter((e) => e.description === description);
	}
	availableGuns = availableGuns.map((e) => e.name);
	return availableGuns;
}

function getRandomAvailable(availableGuns) {
	let randomIndex = Math.floor(Math.random() * availableGuns.length);
	return availableGuns[randomIndex];
}

function getRandomGun(maxPrice = maxMoney, description = "") {
	let available = getAvailableGuns(maxPrice, description);
	let answer = getRandomAvailable(available);
	return answer;
}

function getRandomByClass(description = "") {
	let answer = getRandomGun(maxMoney, description);
	return answer;
}

console.log(getRandomGun());
console.log(getRandomByClass("sniper"));
