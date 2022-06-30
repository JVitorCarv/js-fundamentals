function purchases(w1, w2) {
  const iceCream = w1 || w2;
  const tvBig = w1 && w2;
  // const tvSmall  !!(w1 ^ w2)
  const tvSmall = w1 != w2;
  const healthy = !iceCream;

  return { iceCream, tvBig, tvSmall, healthy };
}

console.log(purchases(true, true));
console.log(purchases(true, false));
console.log(purchases(false, false));
