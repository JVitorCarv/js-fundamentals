const drivers = ["Vettel", "Alonso", "Raikkonen", "Massa"];
drivers.pop();
console.log(drivers);

drivers.push("Verstappen");
console.log(drivers);

drivers.shift();
console.log(drivers);

drivers.unshift("Hamilton");
console.log(drivers);

drivers.splice(2, 0, "Bottas", "Massa");
console.log(drivers);

drivers.splice(3, 1);
console.log(drivers);

const someDrivers1 = drivers.slice(2);
console.log(someDrivers1);

const someDrivers2 = drivers.slice(1, 4);
console.log(someDrivers2);
