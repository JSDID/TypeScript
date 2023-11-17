// numbers
let age: number = 42

// string
let str: string
str = 'John';
// let d = str1 + symb

// boolean
let o = true
o = false
// o = 1

// nothing
let h: undefined = undefined;
let g: null = null

// literal
const num = 108
const str2 = 'str'

// universal
let mm: any = 1;
mm = 'str'
mm = []
mm.toUpperCase()

let xx: unknown = 2
if (typeof xx === "string") xx.toUpperCase()

function foo(): void {
    console.log("Hello");
}

foo();