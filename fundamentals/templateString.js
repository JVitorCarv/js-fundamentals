const name = "Rebeca";
const concat = "Hello " + name + "!";
const template = `
    Hello
    ${name}!`;

console.log(concat, template);

console.log(`1 + 1 = ${1 + 1}`);

const up = (text) => text.toUpperCase();
console.log(`Hey... ${up("watch out")}!`);
