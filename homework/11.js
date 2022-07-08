const isBetween = (num, min, max, inclusive = false) => {
	if (inclusive) {
		if (min <= num && max >= num) {
			return true;
		}
		return false;
	}
	if (min < num && max > num) {
		return true;
	}
	return false;
};

console.log(isBetween(80, 50, 100));
console.log(isBetween(16, 100, 160));
console.log(isBetween(3, 3, 150));
console.log(isBetween(3, 3, 150, true));
