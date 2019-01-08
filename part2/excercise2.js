//Ex 1 - Arrow function
var double = function (value) { return value * 2; };
console.log(double(10));
//Ex 2 - Default Params
var greet2 = function (name) {
    if (name === void 0) { name = "Gareth"; }
    console.log("Hello, " + name);
};
greet2();
greet2("Anna");
//Ex 3 - Spread
var numbers2 = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers2));
//Ex 4 - Spread
var newArray = [66, 2];
newArray.push.apply(newArray, numbers2);
console.log(newArray);
//Ex 5 - Destructurig arrays
var testResult = [1.25, 4.33, 2.29];
var result1 = testResult[0], result2 = testResult[1], result3 = testResult[2];
console.log(result1, result2, result3);
//Ex 6 - Destructuring objects
var scientist = { firstName: "Will", experience: 12 };
var firstName = scientist.firstName, experience = scientist.experience;
console.log(firstName, experience);
