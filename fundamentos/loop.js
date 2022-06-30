for (var i = 0; i < 10; i++) {
  console.log(i);
}
console.log("var i = ", i);

for (let j = 0; j < 10; j++) {
  console.log(j);
}
//console.log("let j = ", j); would only be possible inside "for" scope

const funcsvar = [];

for (var i = 0; i < 10; i++) {
  funcsvar.push(function () {
    console.log(i);
  });
}

funcsvar[2]();
funcsvar[8]();

// When let is used, the function stores the current i value:

const funcslet = [];

for (let i = 0; i < 10; i++) {
  funcslet.push(function () {
    console.log(i);
  });
}

funcslet[2]();
funcslet[8]();
