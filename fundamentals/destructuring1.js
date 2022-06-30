//Destructuring objects

const customer = {
  name: "Charles",
  age: 50,
  address: {
    street: "52",
    number: 1000,
  },
};

const { name, age } = customer;
console.log(name, age);

const { name: n, age: a } = customer;
console.log(n, a);

const { surname, isAlive = true } = customer;
console.log(surname, isAlive);

const {
  address: { street, number, country },
} = customer;
console.log(street, number, country);
