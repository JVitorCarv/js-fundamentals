// Spread in objects
const employee = { name: "Name", wage: 12345 };
const clone = { active: true, ...employee }; // spread

console.log(clone);

// Spread in arrays
const groupA = ["a", "b", "c"];
const groupB = ["d", "e", ...groupA];
console.log(groupB);
