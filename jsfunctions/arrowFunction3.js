let verifyThisFunction = function (param) {
  console.log(this === param);
};

verifyThisFunction(global); // True

const obj = {};
verifyThisFunction = verifyThisFunction.bind(obj);

verifyThisFunction(global); // False
verifyThisFunction(obj); //True

let verifyThisArrow = (param) => console.log(this === param);

verifyThisArrow(global); // False
verifyThisArrow(module.exports); // True

verifyThisArrow = verifyThisArrow.bind(obj);
verifyThisArrow(obj); // False
verifyThisArrow(module.exports); // True
