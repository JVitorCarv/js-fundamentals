{
  {
    {
      {
        var x = "X???";
      }
    }
  }
}
console.log(x);

function test() {
  var local = 123;
}

test();
//console.log(local);

// Var outside a function are always global

var num = 1;
{
  var num = 2;
  console.log("Inside = ", num);
}
console.log("Outside = ", num);
