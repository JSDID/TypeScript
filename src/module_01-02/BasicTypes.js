"use strict";
let x = 20;
let y = "script";
// boolean
let t = true;
let f = false;
// nothing
let u = undefined;
let n = null;
console.log(x);
console.log(y);
console.log(t);
console.log(f);
console.log(n + " - Ничего");
console.log(u + " - Ничего");
// any - чем угодно когда не знаем
let mobile = 1;
mobile = 'Samsung';
mobile.toUpperCase();
console.log(mobile);
// unknown - когда не знаем
let dev = 'Xiaomi';
// dev.toUpperCase(); - только в случае уточнения
if (typeof dev === 'string') {
    dev.toUpperCase();
}
console.log(dev);
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
