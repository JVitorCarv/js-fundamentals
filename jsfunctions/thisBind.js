const customer = {
  greeting: "Hello",
  speak() {
    console.log(this.greeting);
  },
};

customer.speak();
const speak = customer.speak;
speak(); // Conflict

const customerSpeak = customer.speak.bind(customer);
customerSpeak(); // Everyime "this" is referenced, it will use the binded object

function Person() {
  this.age = 0;
  const self = this;
  setInterval(
    function () {
      self.age++;
      console.log(self.age);
    } /*.bind(this)*/,
    1000
  );
}

new Person();
