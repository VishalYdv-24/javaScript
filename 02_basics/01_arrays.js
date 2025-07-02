// ytLink : https://www.youtube.com/watch?v=cejBux2gtEE&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=14

// mdn : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

let myArr = [1,2,4,5,3,4,8];
// console.log(myArr)


let heros = new Array("iron","captain","thor","spidey");
// console.log(heros);
heros.push("scarlet"); // adding data
// console.log(heros);

// array methods 
// .push()
// .pop() removing elements
//  .unshift(argument) to add elements in index 0 
// .shift() to remove element from index 0
// .includes()
//  .indexOf()
// .join() change the array into string 

const exp = ["Vishal","Surya",24,17,9,2004,"Fri","Fri"];
// console.log(exp);
// console.log(exp.join())

// slice,splice


// slice in this it range from 1 to 3 not include 3 and do not change original array
console.log("a",exp)

let exp2 = exp.slice(1,3);
console.log(exp2)
console.log("b",exp)


// splice in this it range form 1 to 3 but include 3 also and also remove that part from original array too
let exp3 = exp.splice(1,3);
console.log(exp3);
console.log("c",exp);