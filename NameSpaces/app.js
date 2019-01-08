//NAMESPACES - where we want to group similar things
//To make funtions availible outside of the namesapce, prepend with export
var MyMath;
(function (MyMath) {
    var Circle;
    (function (Circle) {
        var PI = 3.14;
        function calculateCircumference(diameter) {
            return diameter * PI;
        }
        Circle.calculateCircumference = calculateCircumference;
        ;
    })(Circle = MyMath.Circle || (MyMath.Circle = {}));
})(MyMath || (MyMath = {}));
//NAMESPACES - where we want to group similar things
//To make funtions availible outside of the namesapce, prepend with export
var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calculateRectangle(width, length) {
        return width * length;
    }
    MyMath.calculateRectangle = calculateRectangle;
    ;
})(MyMath || (MyMath = {}));
//In order to run all files such as those in the namespace, tsc --outFile <Filename to output as> 
// <files you want to bundle>
//Importing namespaces using 3 ///
/// <reference path = "circleMath.ts" />
/// <reference path = "rectangleMath.ts" /> 
//Giving alias to an import
var CircleMath = MyMath.Circle;
console.log(MyMath.calculateRectangle(10, 20));
console.log(CircleMath.calculateCircumference(3));
