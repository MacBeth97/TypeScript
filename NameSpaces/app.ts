//In order to run all files such as those in the namespace, tsc --outFile <Filename to output as> 
// <files you want to bundle>

//Importing namespaces using 3 ///
/// <reference path = "circleMath.ts" />
/// <reference path = "rectangleMath.ts" /> 

//Giving alias to an import
import CircleMath = MyMath.Circle;

console.log(MyMath.calculateRectangle(10,20));
console.log(CircleMath.calculateCircumference(3));
