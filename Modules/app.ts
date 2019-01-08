//Install SystemJS 0.x using:
// npm install --save systemjs@0.21.5
//Change HTML scripts as follows:

// <script src="node_modules/systemjs/dist/system.js"></script>
// <script>
//     //Set our baseURL reference path
//     SystemJS.config({
//         baseURL: '/'
//     });

//     // loads /js/main.js
//     SystemJS.import('app.js');
// </script>

import * as Circle from "./math/circle";
import calc from "./math/rectangle";

console.log(Circle.PI);
console.log(Circle.calculateCircumference(10));
console.log(calc(20, 50));