let p = new Promise(function (resolve) {
	resolve([5, 4, 2, 6]);
});

function firstElement(num_list) {
	console.log(num_list[0]);
	return num_list[0];
}

p.then(firstElement)
	.then((value) => value + 2)
	.then((value) => console.log(value));
