// let & const
// var scope is global
// let scope is block
var variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);
// Creates immutable value
var maxLevels = 100;
console.log(maxLevels);
// Block Scope
function reset() {
    // Null value doesnt override global value
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
// Arrow functions
console.log("Arrow Functions");
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 3));
var multiplyNumbers = function (number1, number2) { return number1 * number2; };
console.log(multiplyNumbers(10, 3));
// const multiplyNumber = (number1: number, number2:number) => {
//     return number1 * number2;
// };
var greet = function () {
    console.log("Hello");
};
greet();
// If only one arg, can leave out round brace
var greetFriend = function (friend) { return console.log(friend); };
greetFriend("Manu");
// Default Parameters
console.log("DEFAULT PARAMETERS");
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
};
countdown();
// Rest & Spread Operators, ts determines which you are using
console.log("REST & SPREAD");
var numbers = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3));
// Spread Operator ... spreads out array into single values, making it a list
console.log(Math.max.apply(Math, numbers));
// Rest operator
console.log(Math.max.apply(Math, numbers));
function makeArray(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args;
}
;
console.log(makeArray("Max", 1, 2, 6));
// Destructuring arrays
console.log("Destructuring");
var myHobbies = ["Cookies", "Flying"];
//Destructuring creates two constants hobby1 and hobby2
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
// Destructuring Objects
var userData = { userName: "Gareth", age: 21 };
var myName = userData.userName, myAge = userData.age;
console.log(myName, myAge);
// Template literals, uses ``, allows multiline and variable usage
var userName = "Gareth";
var greeting = "This is a heading\nI'm " + userName + "\nThis is cool";
console.log(greeting);
