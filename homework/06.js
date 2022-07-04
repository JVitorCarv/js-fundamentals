const simpleInt = (p, r, t) => {
	return p * (1 + r * t);
};

const compInt = (p, r, t) => {
	return p * (1 + r) ** t;
};

const printInterest = (p, r, t) => {
	console.log(`Simple: $${simpleInt(p, r, t).toFixed(2)}
    \nCompound: $${compInt(p, r, t).toFixed(2)}`);
};

printInterest(100, 0.1, 2);
