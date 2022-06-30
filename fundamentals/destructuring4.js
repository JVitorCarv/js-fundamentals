function rand([min = 0, max = 1000]) {
  if (min > max) [min, max] = [max, min];
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
}

console.log(rand([50, 40]));
console.log(rand([992]));
console.log(rand([, 10]));
console.log(rand([]));
//console.log(rand())
