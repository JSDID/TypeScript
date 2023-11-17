// numbers
let age: number = 42;

let x: number = 10.5;
let y: number = 190239;

console.log(x);
console.log(y);

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


let nums = [1, 2, 3, 4, 5];

function avarage(...nums: number[]) {
    const sum = nums.reduce((current, total) => current + total, 0)
    return sum / nums.length;
}

console.log(avarage());

