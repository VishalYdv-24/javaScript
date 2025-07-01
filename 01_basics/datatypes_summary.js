// ytLink : https://youtu.be/suMvZWjjKbo?si=CFC5BYIU7uRcT12n

// primitive :
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


// reference type (non-primitive)

// Array, Objects, Functions

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id);
console.log(typeof id);
console.log(id===anotherId);


// Arrays
const heros = ["Captain", "iron", "thor", "blackWidow"];
console.log(heros);

// object
let myObj = {
    name: "vishal",
    age: 22,
}

// function
const myFunction = function(){
    console.log("Hello Surya");
    
}

console.log(myFunction());
