//Install SystemJS 0.x using:
// npm install --save systemjs@0.21.5
//Change HTML scripts as follows:
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "./math/circle", "./math/rectangle"], function (require, exports, Circle, rectangle_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Circle = __importStar(Circle);
    rectangle_1 = __importDefault(rectangle_1);
    console.log(Circle.PI);
    console.log(Circle.calculateCircumference(10));
    console.log(rectangle_1.default(20, 50));
});
