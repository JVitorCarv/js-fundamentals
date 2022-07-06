console.log(typeof Array, typeof new Array());

let approved = new Array("A", "b", "c");
console.log(approved);

approved = ["John", "Bob", "William"];
console.log(approved[0]);
console.log(approved[3]);
approved[3] = "Paul";
approved.push("Usman");
console.log(approved.length);
approved[9] = "Lul";
console.log(approved);

approved.splice(1, 1, "E1", "E2");
console.log(approved);
