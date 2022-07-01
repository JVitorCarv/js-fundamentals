const customer = {
  name: "John",
  surname: "John",
  age: 28,
  weigth: 60,
};

for (let attribute in customer) {
  console.log(`${attribute} = ${customer[attribute]}`);
}
