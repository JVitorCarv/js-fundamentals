// someone -> 123 -> {...}
const someone = { name: "John" };
someone.name = "Bob";
console.log(someone);

// someone -> 456 -> {...}
// someone = { name: "Anna" }

Object.freeze(someone); // The object is now constant
someone.name = "William";
someone.address = "St. 42";
delete someone.name;
console.log(someone);
