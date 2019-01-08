"use strict";
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
