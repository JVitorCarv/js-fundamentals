const teams = new Set();
teams.add("Manchester United");
teams.add("Liverpool").add("Chelsea").add("Manchester City");
teams.add("Manchester United");

console.log(teams);
console.log(teams.size);
console.log(teams.has("chelsea"));
console.log(teams.has("Chelsea"));
teams.delete("Chelsea");
console.log(teams.has("Chelsea"));

const names = ["A", "B", "A", "C"];
const nameSet = new Set(names);
console.log(nameSet);
