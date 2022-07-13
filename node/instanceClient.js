const counterA = require("./singleInstance");
const counterB = require("./singleInstance");

const counterC = require("./newInstance")(); // Since this returns a function, it has to be activated
const counterD = require("./newInstance")();

counterA.inc();
counterA.inc();
console.log("B: (and A) " + counterB.value);

counterC.inc();
counterC.inc();
console.log("C: " + counterD.value);
console.log("D: " + counterC.value);
