// ytLink :  https://youtu.be/fozwNnFunlo?si=60416Rhenm4c9X74

const user = {
    name : "vishal", // string type
    age : 21,
    weight : 79 
}
console.log(typeof user.name); //string type 
console.log("My name is "+user.name+", I'm "+user.age+" years old and "+user.weight+"kg in weights.");
console.log(`My name is ${user.name}, I'm ${user.age} years old and ${user.weight}kg in weights.`);

// how to declear strings

const friend = new String("Surya");
console.log(friend);
console.log(typeof friend); //it is object type kind of array 
console.log(friend.toUpperCase());
console.log(friend.length);
console.log(friend.charAt(3));
console.log(friend.indexOf('y'));

// functions
// substring(), slice(), trim(), replce('',''), includes(), split()