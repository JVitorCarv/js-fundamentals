function luckyNum(guessedNum) {
	let luckyNum = Math.floor(Math.random() * 10) + 1;
	if (guessedNum === luckyNum) {
		return `Congratulations! The sorted number really was ${luckyNum}`;
	}
	return `You guessed ${guessedNum} but the sorted number was ${luckyNum}`;
}

for (let i = 1; i <= 10; i++) {
	console.log(luckyNum(i));
}
