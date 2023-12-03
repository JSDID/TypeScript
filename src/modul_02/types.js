"use strict";
console.clear();
console.log('modul_2');
// type Developer = {
//   skills: string[],
//   phone: string,
//   level?: 'junior' | 'middle' | 'senior',
//   say(): void,
//   code?: (arg: string) => void,
// } & Employee
// В чем разница между Интерфейсами и Алясами 
// 1. Не можем второй раз создать глобально
// 2. Можно создавать Интерфейс
// Интерфейс
// 1. Когда хотим расширать нужен Интерфейс (extends)
// 2. Классах используеться (implements) 
// Сужение типов (narrowing)
function example1(x) {
    if (typeof x === "string") {
        x.toLowerCase();
    }
    else if (typeof x === "number") {
        x.toFixed();
    }
    else if (x === undefined) {
        console.log('no value');
    }
    else {
        x;
    }
}
function example2(strs) {
    // if (typeof strs === "object") {}
    // if (Array.isArray(strs)) {
    if (strs && typeof strs === "object") {
        strs.concat([]);
    }
    else if (typeof strs === "string") {
        strs.toLowerCase();
    }
}
function example3(x) {
    if (x instanceof Date) {
        x.getMonth();
    }
    else {
        x.concat([]);
    }
}
function move(animal) {
    if ('swim' in animal) {
        return animal.swim();
    }
    return animal.fly();
}
