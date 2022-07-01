function getRandomIntBetween(min, max) {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
}

let value = 0;
let i = 1;
while (value != -1) {
  value = getRandomIntBetween(-1, 10);
  console.log(`Number ${i}: ${value}`);
  i++;
}
