"use strict";
// numbers
let age = 42;
let x = 10.5;
let y = 190239;
console.log(x);
console.log(y);
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
let nums = [1, 2, 3, 4, 5];
function avarage(...nums) {
    const sum = nums.reduce((current, total) => current + total, 0);
    return sum / nums.length;
}
console.log(avarage());
