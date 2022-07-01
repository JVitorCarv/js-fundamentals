function area(w, h) {
  const area = w * h;
  if (area > 20) {
    console.log(`Value above the limit: ${area}m²`);
  } else {
    return area; //Return is optional, may not happen in all cases
  }
}

console.log(area(2, 2));
console.log(area(2)); // Params are optional as well
