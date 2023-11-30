
interface User {
    isOnline: boolean
}

interface Window {
    isAuth: boolean
}

window.isAuth

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