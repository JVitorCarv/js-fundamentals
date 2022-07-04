// Closure is the scope created when a function is declared
// This scope makes it possible for the function to manipulate external variables

const x = "Global";

function outside() {
	const x = "Local";
	function inside() {
		return x;
	}
	return inside;
}

const myFunction = outside();
console.log(myFunction());
