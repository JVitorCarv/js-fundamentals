function countChar(char, text) {
	text = text.toLowerCase();
	let textToArray = text.split("");
	let count = textToArray.filter((e) => e === char).length;
	return count;
}

console.log(countChar("a", "Are you typing a message?"));
