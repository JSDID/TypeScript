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
// Картежы 
const pars = [['key1', 'value1'], ['key2', 'value2']];
const data = [1, true, 'lodash'];
const doc = [];
doc.push(['Alex', 'Neb', 12, new Date(1992, 22, 8)]);
const staticX = 'loading';
// void - ничего не возращаем
function pringId(id) {
    // сужение типов 
    if (typeof id === 'string') {
        // надо проверить
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
console.log(pringId(1));
// number - что возращаем 
function Welcome(person) {
    if (Array.isArray(person)) {
        console.log('Hello', person.join(' '));
        return 1;
    }
    else {
        console.log('Hello', person);
        return person;
    }
}
console.log('Diana', 'Kate');
// Enum 
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
    ShapeKind[ShapeKind["Square"] = 1] = "Square";
})(ShapeKind || (ShapeKind = {}));
const myShape = ShapeKind.Circle;
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["ERROR"] = 500] = "ERROR";
    StatusCode[StatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    StatusCode[StatusCode["NOT_AUTH"] = 403] = "NOT_AUTH";
})(StatusCode || (StatusCode = {}));
