const numBrokenHiScores = (scores) => {
	let highest = 0;
	let times = 0;
	for (let i = 0; i < scores.length; i++) {
		if (scores[i] > scores[highest]) {
			highest = i;
			times++;
		}
	}
	return times;
};

const lowestScore = (scores) => {
	let lowest = 0;
	for (let i = 0; i < scores.length; i++) {
		if (scores[i] < scores[lowest]) {
			lowest = i;
		}
	}
	return ++lowest;
};

const getResults = (scores) => {
	let results = [];
	results.push(numBrokenHiScores(scores));
	results.push(lowestScore(scores));
	return results;
};

let scores = [10, 20, 20, 8, 25, 3, 0, 30, 1];
console.log(getResults(scores));
