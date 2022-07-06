function MyObj() {}
console.log(MyObj.prototype);

const obj1 = new MyObj();
const obj2 = new MyObj();

MyObj.prototype.name = "Random";
MyObj.prototype.speak = function () {
	console.log(`My name is ${this.name}`);
};

obj1.speak();
obj2.name = "Another";
obj2.speak();

const obj3 = {};
obj3.__proto__ = MyObj.prototype;
obj3.name = "Obj3";
obj3.speak();

// Review
console.log(new MyObj().__proto__ === MyObj.prototype);
console.log(MyObj.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);
