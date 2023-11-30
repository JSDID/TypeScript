console.clear();
console.log('modul_2');


interface User {
    isOnline: boolean
}

// interface Window {
//     isAuth: boolean
// }

// window.isAuth

interface User {
    readonly name: string,
    readonly email: string,
    readonly login: string,
    password?: number
}

interface Person {
    readonly firstName: string,
    lastName: string,
    phone: string,
    yearOfBirth?: number
}


interface Exployee extends User, Person {
    contractStart: Date
}

interface Developer extends Exployee {
    skills: string[],
    phone: string,
    lavel: 'Junior' | 'Sinior' | 'Middle',
    say(): void,
    code?: (arg: string) => void
}

// class MyDeveloper implements Developer {}

// Подробнее об Алиасах 

type Union1 = 'a' | 'b' | 'c' | 'd';
type Union2 = 'a' | 'e' | 'c' | 'i';
type Union3 = Union1 | Union2; // all variants
type Union4 = Union1 & Union2; // a | c

type Union5 = { a: string, b: string, c: number } & { a: string, t: boolean, z: null }

// type Employee = {
//   contractStart: Date,
// } & User & Person

// // const user1: Employee = {}

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
// 1. Когда хотим расширать нужен Интерфейс
// 2. Классах используеться implements 
