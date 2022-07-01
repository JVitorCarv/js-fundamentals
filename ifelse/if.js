Number.prototype.inBetween = function (start, end) {
  return this >= start && this <= end;
};

const printResult = function (grade) {
  if (grade.inBetween(9, 10)) {
    console.log("Great!");
  } else if (grade.inBetween(7, 8.99)) {
    console.log("Approved");
  } else if (grade.inBetween(0, 6.99)) {
    console.log("Failed");
  } else {
    console.log("Invalid grade");
  }
};

printResult(9.5);
printResult(8.99);
printResult(6.99);
