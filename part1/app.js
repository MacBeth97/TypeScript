"use strict";
/********Types*******/
// string
var myName = 'Max';
// myName = 28;
// number
var myAge = 27.5;
// myAge = 'Max';
// boolean
var hasHobbies = false;
// hasHobbies = 1;
// assign types
var myRealAge;
myRealAge = 27;
// array
var hobbies = ["Cooking", "Sports"];
hobbies = [100];
// tuples
var address = ["Superstreet", 99];
// enums
var Color;
(function (Color) {
    Color[Color["Grey"] = 0] = "Grey";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; //2
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
// any
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void
function sayHello() {
    console.log("Hello!");
}
// Argument types
function multiply(val1, val2) {
    return val1 * val2;
}
console.log(multiply(10, 2));
// function types
var myMultiply;
/*Specify that it must take two num args and return num arg*/
myMultiply = multiply;
/*Make it = multiply function*/
console.log(myMultiply(5, 2));
// objects
var userData = {
    name: "Max",
    age: 27
};
userData = {
    name: "Gareth",
    age: 21
};
// Complex Objects
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// Union Types
var myRealRealAge = 27;
myRealRealAge = "27";
// Check Types
var finalValue = 30;
if (typeof finalValue == "number") {
    console.log("Final Value is a number");
}
// never type
function neverReturns() {
    throw new Error('An error!');
}
// Nullable types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var canThisBeAny = null;
canThisBeAny = 12;
/******End of Types*******/
