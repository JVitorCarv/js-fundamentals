class Transaction {
	constructor(name = "Default", value = 0) {
		this.name = name;
		this.value = value;
	}
}

class FinantialCycle {
	constructor(month, year) {
		this.month = month;
		this.year = year;
		this.transactions = [];
	}

	addTransactions(...transactions) {
		transactions.forEach((t) => this.transactions.push(t));
	}

	sum() {
		let consolidatedValue = 0;
		this.transactions.forEach((t) => {
			consolidatedValue += t.value;
		});
		return consolidatedValue;
	}
}

const wage = new Transaction("Wage", 45000);
const bill = new Transaction("Bill", -200);

const cycle = new FinantialCycle(6, 2022);
cycle.addTransactions(wage, bill);
console.log(cycle.sum());

const anotherBill = new Transaction("Another Bill", -400);
cycle.addTransactions(anotherBill);
console.log(cycle.sum());
