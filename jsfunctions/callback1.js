const brands = ["Mercedes", "Audi", "BMW"];

function print(name, i) {
  console.log(`${i + 1}. ${name}`);
}

brands.forEach(print);
brands.forEach(function (a) {
  console.log(a);
});
brands.forEach((a) => console.log(a));
brands.forEach(function (a, b) {
  console.log(`${b + 1}. ${a}`);
});
