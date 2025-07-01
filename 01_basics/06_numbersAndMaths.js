// ytLink : https://youtu.be/_KqpeDc47Ro?si=wMV8b-Xd1cHiMI6U

// -----------Numbers-----------------
const score = 400; // number
const points = new Number(500);// object
console.log(points);
console.log(typeof points);// Object
console.log(points.toString().length);
console.log(points.toFixed(2));

// toPrecision(), 

// toLocalString()

const num = 10000000000;
console.log(num.toLocaleString()); // US standard
console.log(num.toLocaleString('en-IN')); // INDIAN standard



// ----------------Maths------------------

console.log(Math);
console.log(Math.abs(-4)); // make positive
//  .round(4.6), .ceil(4.2), .floor(4.2), .min(1,2,4,5,7), .max(4,5,7,8,5), Math.random(),

console.log(Math.random());
console.log(Math.floor(Math.random() * 10 + 1));

let min = 1;
let max = 6;
console.log(Math.floor(Math.random() * (max-min+1) + min));