const gunList = require("./gunList.json");

function getAvailableGuns(gunList, maxPrice, description) {
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

function getRandomGun(gunList = [], maxPrice = 9000, description = "") {
	let available = getAvailableGuns(gunList, maxPrice, description);
	let answer = getRandomAvailable(available);
	return answer;
}

console.log(getRandomGun(gunList, 2000));
