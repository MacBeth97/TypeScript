/********Types*******/

// string
let myName = 'Max';
// myName = 28;

// number
let myAge = 27.5;
// myAge = 'Max';

// boolean
let hasHobbies = false;
// hasHobbies = 1;

// assign types
let myRealAge: number;
myRealAge = 27;

// array
let hobbies: any[] = ["Cooking", "Sports"];
hobbies = [100];

// tuples
let address: [string, number] = ["Superstreet", 99];

// enums
enum Color {
    Grey, //0
    Green = 100, //100
    Blue = 2 //2
}
let myColor: Color = Color.Green;
console.log(myColor);


// any
let car: any = "BMW";
console.log(car);
car = {brand: "BMW", series: 3};
console.log(car);

// functions
function returnMyName(): string {
    return myName;
}
console.log(returnMyName());

// void
function sayHello(): void {
    console.log("Hello!");
}

// Argument types
function multiply(val1: number, val2: number): number {
    return val1 * val2;
}
console.log(multiply(10, 2));

// function types
let myMultiply: (value1:number, value2: number) => number;
/*Specify that it must take two num args and return num arg*/
myMultiply = multiply;
/*Make it = multiply function*/
console.log(myMultiply(5,2));

// objects
let userData: { name: string, age: number} = {
    name: "Max",
    age: 27
};
userData = {
    name: "Gareth",
    age: 21
};

// Complex Objects

let complex: { data: number[], output: (all:boolean) => number[]} = {
    data: [100, 3.99, 10],
    output: function (all:boolean) : number[] {
        return this.data;
    }
};

// TYPE ALIAS
// Prevents having to retype 
type Complex = {data: number[], output: (all:boolean) => number[]}; 

let complex2: Complex = {
    data: [100, 3.99, 10],
    output: function (all:boolean) : number[] {
        return this.data;
    }
};

// Union Types
let myRealRealAge: number | string = 27;
myRealRealAge = "27"

// Check Types
let finalValue = 30;
if (typeof finalValue == "number") {
    console.log("Final Value is a number");
}

// never type
function neverReturns():never {
    throw new Error('An error!');
}

// Nullable types
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny: any = null;
canThisBeAny = 12;

/******End of Types*******/

