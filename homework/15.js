function countWords(phrase) {
	let temp = [];
	temp = phrase.split(" ");
	return temp.length;
}

console.log(countWords("I am studying JavaScript"));
