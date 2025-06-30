let score = 24;
let points = "17abc";
console.log(typeof(points));

console.log(typeof score);

// converting points (string) into number
let valueInNumber = Number(points);
console.log(valueInNumber);

console.log(typeof(valueInNumber));

// "33" => 33
// "33abc" => NaN
// true => 1
// null => 0
// undefined => NaN

let loggedIn = 1;
let boolLoggedIn = Boolean(loggedIn);
console.log(typeof boolLoggedIn);
console.log(boolLoggedIn)

