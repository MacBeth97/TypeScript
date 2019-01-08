// let & const

// var scope is global
// let scope is block
let variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);

// Creates immutable value
const maxLevels = 100;
console.log(maxLevels);

// Block Scope
function reset() {
    // Null value doesnt override global value
    let variable = null;
    console.log(variable);
}
reset();
console.log(variable);

// Arrow functions
console.log("Arrow Functions");
const addNumbers = function(number1: number, number2: number): number {
    return number1 + number2;
};
console.log(addNumbers(10,3));

const multiplyNumbers = (number1: number, number2:number) => number1 * number2;
console.log(multiplyNumbers(10,3));
// const multiplyNumber = (number1: number, number2:number) => {
//     return number1 * number2;
// };

const greet = () => {
    console.log("Hello");
};
greet();

// If only one arg, can leave out round brace
const greetFriend = friend => console.log(friend);
greetFriend("Manu");

// Default Parameters
console.log("DEFAULT PARAMETERS");
const countdown = (start: number = 10): void => {
    while (start > 0) {
        start--;    
    }
    console.log("Done!", start);
};
countdown();

// Rest & Spread Operators, ts determines which you are using
console.log("REST & SPREAD");
const numbers = [1,10,99,-5];
console.log(Math.max(33,99,10,-3));

// Spread Operator ... spreads out array into single values, making it a list
console.log(Math.max(...numbers));

// Rest operator
console.log(Math.max(...numbers));
function makeArray(name: string, ...args: number[]) {
    return args;
};

console.log(makeArray("Max", 1,2,6));

// Destructuring arrays
console.log("Destructuring");
const myHobbies = ["Cookies", "Flying"];
//Destructuring creates two constants hobby1 and hobby2
const [hobby1, hobby2] = myHobbies; 
console.log(hobby1,hobby2);

// Destructuring Objects
const userData = {userName: "Gareth", age: 21};
const {userName: myName, age: myAge} = userData;
console.log(myName, myAge);

// Template literals, uses ``, allows multiline and variable usage
const userName = "Gareth";
const greeting = `This is a heading
I'm ${userName}
This is cool`;
console.log(greeting);

