
let x: number = 20;
let y: string = "script";
let r = null;

console.log(x);
console.log(y);
console.log(r);

const numbers: Array<number> = [1, 2, 3, 4, 5];
console.log(numbers);

const string: Array<string> = ["s", "c", "r", "i", "p", "t"];
console.log(string);

interface Car {
    wheels: number;
    brand: string;
    type: string;
    isNew?: boolean;
    [key: string]: unknown;
}

const car: Car = {
    wheels: 5,
    brand: "BMW",
    type: "Sedan",
    isNew: false,
}

car.wheels = 10;
car.go = true;

console.log(car);


function greet(name: string) {
    console.log("Hello, " + name.toUpperCase() + " !");
}

console.log(greet('Alex'));


const sum = (a: number, b: number): number => a + b;
console.log(sum(2, 2));