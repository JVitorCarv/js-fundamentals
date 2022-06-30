let isActive = false;
console.log(isActive);

isActive = true;
console.log(isActive);

isActive = 1;
console.log(!!isActive);

console.log("The true ones...");

console.log(!!3);
console.log(!!-1);
console.log(!!" ");
console.log(!!"Text");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isActive = true));

console.log("The false ones...");
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isActive = false));

console.log("Finishing...");

// Prints true if there's any true value
console.log(!!("" || null || 0 || " "));

// Prints first true value
console.log("" || null || 0 || "Test");

let name = "";
// Default value
console.log(name || "Name not informed");
