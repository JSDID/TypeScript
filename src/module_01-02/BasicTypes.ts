
let x: number = 20;
let y: string = "script";

// boolean
let t = true;
let f = false;

// nothing
let u: undefined = undefined;
let n: null = null;

console.log(x);
console.log(y);
console.log(t);
console.log(f);
console.log(n + " - Ничего");
console.log(u + " - Ничего");

// any - чем угодно когда не знаем
let mobile: any = 1;
mobile = 'Samsung';
mobile.toUpperCase();
console.log(mobile);

// unknown - когда не знаем
let dev: unknown = 1;
// dev.toUpperCase(); - только в случае уточнения
if (typeof dev === 'string') {
    dev.toUpperCase();
}
console.log(dev);

const numbers: Array<number> = [1, 2, 3, 4, 5];
console.log(numbers);

const string: Array<string> = ["s", "c", "r", "i", "p", "t"];
console.log(string);

// Типизация функций
function greet(name: string) {
    console.log("Hello, " + name.toUpperCase() + " !");
}

console.log(greet('Alex'));

const sum = (a: number, b: number): number => a + b;
console.log(sum(5, 5));

// Возращаемые значения

// void - когда завершиться
function log(name: string, userId?: number): void {
    console.log("Hello", name, userId);
}
console.log(log('Script -', 2023));


function avarage(num: number[]) {
    const sum = num.reduce((current, total) => current + total, 0);
    console.log(sum);
    //  return sum / num.length;
}

console.log(avarage([1, 2, 3, 4, 5]));


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


// Функция как обьект 

// Обезательные параметры
function printPoint(point: { x: string, y: string }): void {
    console.log(`Coorainate of the point is x : ${point.x} and y: ${point.y}`);
}

const obj1 = {
    x: '1',
    y: '2'
}


const obj2 = {
    x: 1,
    y: 2
}

console.log(printPoint(obj1));

// Не обезательные параметры
function printName(user: {
    firstName: string,
    lastName?: string
}): void {
    console.log('Hello', user.firstName.toLocaleUpperCase());
    if (user.lastName) {
        console.log('Nice to meet you Mr', user.lastName?.toLocaleUpperCase());
    }
}

console.log(printName({ firstName: 'Mikhail', lastName: 'Broun' }))

// Картежы 
const pars: [string, string][] = [['key1', 'value1'], ['key2', 'value2']];
const data: [number, boolean, string] = [1, true, 'lodash'];
const doc: [string, string, number, Date][] = [];
doc.push(['Alex', 'Neb', 12, new Date(1992, 22, 8)]);