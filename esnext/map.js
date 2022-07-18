const technologies = new Map();
technologies.set("react", { framework: false });
technologies.set("angular", { framework: true });

console.log(technologies.react);
console.log(technologies.get("react").framework);

const variedKeys = new Map([
	[function () {}, "Function"],
	[{}, "Object"],
	[123, "Number"]
]);

variedKeys.forEach((value, key) => {
	console.log(key, value);
});

console.log(variedKeys.has(123));
variedKeys.delete(123);
console.log(variedKeys.has(123));
console.log(variedKeys.size);

variedKeys.set(123, "a");
variedKeys.set(123, "b");
console.log(variedKeys);
