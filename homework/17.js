function search(info, stringList) {
	info = info.toLowerCase();

	stringList = stringList.map((e) => e.toLowerCase());

	let foundStrings = stringList.filter((word) => word.includes(info));
	return foundStrings;
}

let words = ["Prototype", "programmer", "dnipro", "blue"];
console.log(search("pro", words));
