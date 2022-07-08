const removeProperty = (obj, property) => {
	delete obj[property];
	return obj;
};

console.log(removeProperty({ a: 1, b: 2 }, "a"));
console.log(
	removeProperty(
		{
			id: 20,
			name: "Pen",
			description: "No description"
		},
		"description"
	)
);
