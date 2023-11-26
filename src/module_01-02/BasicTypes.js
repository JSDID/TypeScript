"use strict";
let x = 20;
let y = "script";
let r = null;
console.log(x);
console.log(y);
console.log(r);
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
const string = ["s", "c", "r", "i", "p", "t"];
console.log(string);
const car = {
    wheels: 5,
    brand: "BMW",
    type: "Sedan",
    isNew: false,
};
car.wheels = 10;
car.go = true;
console.log(car);
function greet(name) {
    console.log("Hello, " + name.toUpperCase() + " !");
}
console.log(greet('Alex'));
const sum = (a, b) => a + b;
console.log(sum(2, 2));
