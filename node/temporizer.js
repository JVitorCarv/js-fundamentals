const schedule = require("node-schedule");

const job1 = schedule.scheduleJob("*/1 * * * * *", function () {
	console.log("job1", new Date().getSeconds());
});

setTimeout(function () {
	job1.cancel();
	console.log("Cancelling job 1...");
}, 5000);

const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [new schedule.Range(1, 5)];
rule.hour = 17;
rule.second = 30;

const job2 = schedule.scheduleJob(rule, function () {
	console.log("job2");
});
