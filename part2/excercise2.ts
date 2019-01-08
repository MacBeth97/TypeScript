//Ex 1 - Arrow function
const double = (value: number) => value*2;
console.log(double(10));

//Ex 2 - Default Params
let greet2 = (name = "Gareth") => {
        console.log("Hello, " + name);
};
greet2();
greet2("Anna");

//Ex 3 - Spread
var numbers2 = [-3, 33, 38, 5];
console.log(Math.min(...numbers2));

//Ex 4 - Spread
const newArray = [66, 2]
newArray.push(...numbers2);
console.log(newArray);

//Ex 5 - Destructurig arrays
const testResult = [1.25,4.33,2.29];
const [result1, result2, result3] = testResult;
console.log(result1, result2, result3);

//Ex 6 - Destructuring objects
const scientist = {firstName: "Will", experience: 12};
const {firstName, experience} = scientist;
console.log(firstName, experience);