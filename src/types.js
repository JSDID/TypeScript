"use strict";
// numbers
let age = 42;
let x = 10.5;
let y = 190239;
console.log(x);
console.log(y);
const numbers = [1, 2, 3, 5.6];
console.log(numbers);
const strs = [];
strs.push('araay');
console.log(strs);
let str;
str = 'John';
// boolean
let o = true;
o = false;
// o = 1
// nothing
let h = undefined;
let g = null;
// literal
const num = 108;
const str2 = 'str';
// universal
let mm = 1;
// неизвестный
let xx = 2;
if (typeof xx === "string")
    xx.toUpperCase();
// basic function
const sum2 = (a, b) => a + b;
function sum1(a, b) {
    return a + b;
}
console.log(sum1(2, 2));
// функция ничего не вохоращает 
function logo(user, userId) {
    console.log(user + ' - ' + userId);
}
logo('Alex', 200);
// функция не завершится 
function crash() {
    throw new Error('crash');
}
function avarage(nums) {
    const sum = nums.reduce((current, total) => current + total, 0);
    return sum / nums.length;
}
console.log(avarage([1, 2, 3, 4, 5]));
const car = {
    wheels: 4,
    brand: "BMW",
    type: "Sedan",
    isNew: false,
};
car.wheels = 10;
car.go = true;
console.log(car);
const cars = [];
cars.push({ brand: 'Audi', wheels: 3, type: '' });
console.log(cars);
// Обьекты как параметры функции 
function printPoint(point) {
    console.log(`Cokcss is x ${point.x} and y ${point.y} `);
}
const obj = {
    x: 1,
    y: 2
};
printPoint(obj);
function printName(user) {
    if (user) {
        console.log('Hello', user.firstName.toUpperCase());
        console.log('Nice to meet you Mr', user.lastName.toUpperCase());
    }
}
console.log(printName({ firstName: 'Mikhail', lastName: 'Broun' }));
function printArr(arr) {
    arr.forEach((element, index) => {
        console.log(element, index);
    });
}
