// numbers
let age: number = 42;

let x: number = 10.5;
let y: number = 190239;

console.log(x);
console.log(y);

const numbers: Array<number> = [1, 2, 3, 5.6];
console.log(numbers);

const strs: Array<string> = [];
strs.push('araay');
console.log(strs);


let str: string;
str = 'John';

// boolean
let o = true;
o = false;
// o = 1

// nothing
let h: undefined = undefined;
let g: null = null;

// literal
const num = 108;
const str2 = 'str';

// universal
let mm: any = 1;

// неизвестный
let xx: unknown = 2;
if (typeof xx === "string") xx.toUpperCase();


// basic function
const sum2 = (a: number, b: number): number => a + b;

function sum1(a: number, b: number): number {
    return a + b;
}

console.log(sum1(2, 2));

// функция ничего не вохоращает 
function logo(user: string, userId?: number): void {
    console.log(user + ' - ' + userId);

}

logo('Alex', 200);

// функция не завершится 
function crash(): never {
    throw new Error('crash')
}


function avarage(nums: number[]) {
    const sum = nums.reduce((current, total) => current + total, 0)
    return sum / nums.length;
}

console.log(avarage([1, 2, 3, 4, 5]));


// object 

interface Car {
    wheels: number;
    brand: string;
    type: string;
    isNew?: boolean;
    [key: string]: unknown;
}

const car: Car = {
    wheels: 4,
    brand: "BMW",
    type: "Sedan",
    isNew: false,
}

car.wheels = 10;
car.go = true;
console.log(car);

const cars: Car[] = [];
cars.push({ brand: 'Audi', wheels: 3, type: '' });
console.log(cars);

// Обьекты как параметры функции 
function printPoint(point: { x: number, y: number }): void {
    console.log(`Cokcss is x ${point.x} and y ${point.y} `);
}

const obj = {
    x: 1,
    y: 2
}

printPoint(obj);

function printName(user: {
    firstName: string,
    lastName: string
}): void {
    if (user) {
        console.log('Hello', user.firstName.toUpperCase());
        console.log('Nice to meet you Mr', user.lastName.toUpperCase());
    }
}

console.log(printName({ firstName: 'Mikhail', lastName: 'Broun' }))


function printArr(arr: unknown[]): void {
    arr.forEach((element) => {
        console.log(element + 'Each');
    });
}

printArr([1, 2]);

const pars: [string, string][] = [['key1', 'value1'], ['key2', 'value2']];
console.log(pars);

const data1: [number, boolean, string] = [1, true, 'script'];
console.log(data1);

const docs: [string, string, number, Date][] = [];
docs.push(['sdsd', 'sd', 1, new Date(1992, 8, 22)])
console.log(docs);