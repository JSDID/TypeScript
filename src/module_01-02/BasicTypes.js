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
let dev = 1;
// dev.toUpperCase(); - только в случае уточнения
if (typeof dev === 'string') {
    dev.toUpperCase();
}
console.log(dev);
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
const string = ["s", "c", "r", "i", "p", "t"];
console.log(string);
// Типизация функций
function greet(name) {
    console.log("Hello, " + name.toUpperCase() + " !");
}
console.log(greet('Alex'));
const sum = (a, b) => a + b;
console.log(sum(5, 5));
// Возращаемые значения
// void - когда завершиться
function log(name, userId) {
    console.log("Hello", name, userId);
}
console.log(log('Script -', 2023));
function avarage(num) {
    const sum = num.reduce((current, total) => current + total, 0);
    console.log(sum);
    //  return sum / num.length;
}
console.log(avarage([1, 2, 3, 4, 5]));
const car = {
    wheels: 5,
    brand: "BMW",
    type: "Sedan",
    isNew: false,
};
car.wheels = 10;
car.go = true;
console.log(car);
// Функция как обьект 
// Обезательные параметры
function printPoint(point) {
    console.log(`Coorainate of the point is x : ${point.x} and y: ${point.y}`);
}
const obj1 = {
    x: '1',
    y: '2'
};
const obj2 = {
    x: 1,
    y: 2
};
console.log(printPoint(obj1));
// Не обезательные параметры
function printName(user) {
    var _a;
    console.log('Hello', user.firstName.toLocaleUpperCase());
    if (user.lastName) {
        console.log('Nice to meet you Mr', (_a = user.lastName) === null || _a === void 0 ? void 0 : _a.toLocaleUpperCase());
    }
}
console.log(printName({ firstName: 'Mikhail', lastName: 'Broun' }));
