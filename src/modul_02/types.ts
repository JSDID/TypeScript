console.clear();
console.log('modul_2');


interface User1 {
    isOnline: boolean
}

// interface Window {
//     isAuth: boolean
// }

// window.isAuth

interface User2 {
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


interface Exployee extends User1, Person {
    contractStart: Date
}

interface Developer extends Exployee {
    skills: string[],
    phone: string,
    lavel: 'Junior' | 'Sinior' | 'Middle',
    say(): void,
    code?: (arg: string) => void
}

// Алиасы 

type Union1 = 'a' | 'b' | 'c' | 'd';
type Union2 = 'a' | 'e' | 'c' | 'i';
type Union3 = Union1 | Union2; // all variants
type Union4 = Union1 & Union2; // a | c

type Union5 = { a: string, b: string, c: number } & { a: string, t: boolean, z: null }

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
function example1(x?: number | string) {
    if (typeof x === "string") {
        x.toLowerCase()
    } else if (typeof x === "number") {
        x.toFixed()
    } else if (x === undefined) {
        console.log('no value')
    } else {
        x
    }
}


function example2(strs: string | string[] | null) {
    // if (typeof strs === "object") {}
    // if (Array.isArray(strs)) {
    if (strs && typeof strs === "object") {
        strs.concat([])
    } else if (typeof strs === "string") {
        strs.toLowerCase()
    }
}


function example3(x: number[] | Date) {
    if (x instanceof Date) {
        x.getMonth();
    } else {
        x.concat([]);
    }
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };

// Type Guards - защитники 

function isFish(pet: Fish | Bird): pet is Fish {
    // as - утверждение
    return (pet as Fish).swim !== undefined;
}

function move(animal: Fish | Bird) {
    if (isFish(animal)) {
        return animal.swim()
    }

    return animal.fly();
}

// Asserts - алтернатива этим функциям. 
// Выбрасывающие ошибки

type User3 = {
    name: string,
    displayName: string | null,
}

// asserts user is User3 - пользователь это пользователь а это строка
function assertDisplayName(user: User3): asserts user is User3 & { displayName: string } {
    // Если у пользователя отсуствует то тогда выбрасываем ошибку
    if (!user.displayName) throw new Error('User has no displayName field');
    // Если все нормально 
    console.log(user.displayName.toLowerCase());
}

function logUserByDisplayName(user: User3) {
    assertDisplayName(user);
    console.log(user.displayName.toUpperCase());
}

// Типизация this

// interface User4 {
//     id: number;
//     admin: boolean;
// }

const user4 = {
    id: 5,
    admin: false,
    beforeAdmin: function (): void {
        this.admin = true;
    }
}

function myClickHandler(
    this: HTMLButtonElement,
    event: Event
) {
    this.disabled = true;
}

// unknown - неизвестное
// void - не знаем что ожидать
// any - не указываем 

function add(a: number, b: number): number;
function add(a: string, b: string): string;

// Перегрузка функций
function add(a: any, b: any): unknown {
    return a + b;
}

add(1, 1);


type asyncCb = (res: number) => number;
function asyncSum(a: number, b: number): Promise<number>;
function asyncSum(a: number, b: number, cb: asyncCb): number;
function asyncSum(a: number, b: number, cb?: asyncCb): any {
    const result = a + b;
    if (cb) {
        return cb(result)
    }

    return Promise.resolve(result);
}
asyncSum(1, 2);


// Рекусивные типы 
type NestedNumbers = number | NestedNumbers[];

const nums: NestedNumbers = [1, 2, [1, 2, [12, [123]]]]
nums.push(1)
nums.push([1, [12]])

// JSON
type JSONPrimitive = string | number | boolean | null;
type JSONObject = { [k: string]: JSONValue }
type JSONArray = JSONValue[]

type JSONValue = JSONPrimitive | JSONObject | JSONArray;

function isJSON(arg: JSONValue) { }

isJSON("hi")
isJSON(1)
isJSON({ a: [123], v: { x: 1 } })
isJSON([1, { x: '' }])

// Оператор 

let word: string | null = null;

const num: number = 25;
if (num > 5) {
    word = ''
}

console.log(word!.toLowerCase());


