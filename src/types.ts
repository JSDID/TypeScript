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

function foo(s: string): void {
    console.log(s);

}

foo('foo');