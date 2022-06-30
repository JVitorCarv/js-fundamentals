function errorHandling(error) {
  throw new Error("...");
  //throw 10
  //throw true
  //throw 'mensagem'
}

function printName(obj) {
  try {
    console.log(obj.name.toUpperCase(), "!");
  } catch (e) {
    errorHandling(e);
  } finally {
    console.log("Final");
  }
}

const obj = { nome: "Robert" };
printName(obj);
