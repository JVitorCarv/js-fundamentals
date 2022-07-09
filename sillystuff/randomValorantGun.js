function gun(name, price, description) {
	return {
		name,
		price,
		description
	};
}

const gunList = [];

gunList.push(
	// Sidearms
	gun("Classic", 0, "sidearm"),
	gun("Shorty", 150, "sidearm"),
	gun("Frenzy", 450, "sidearm"),
	gun("Ghost", 500, "sidearm"),
	gun("Sheriff", 800, "sidearm"),

	// Smg
	gun("Stinger", 950, "smg"),
	gun("Spectre", 1600, "smg"),

	// Shotguns
	gun("Bucky", 850, "shotgun"),
	gun("Judge", 1850, "shotgun"),

	// Rifles
	gun("Bulldog", 2050, "rifle"),
	gun("Guardian", 2250, "rifle"),
	gun("Phantom", 2900, "rifle"),
	gun("Vandal", 2900, "rifle"),

	// Sniper
	gun("Marshall", 950, "sniper"),
	gun("Operator", 4700, "sniper"),

	// Machine Guns
	gun("Ares", 1600, "machine"),
	gun("Odin", 3200, "machine")
);

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
