// ytLink : https://www.youtube.com/watch?v=vVYOHmqQDCU&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=16

// singleton

// symbol data type creation and how to use it into object
const mysymb =Symbol( "key1");

const user = {
    name:"vishal",
    age : 21,
    email : "vishalydv2409@gmail.com",
    isLoggedIn : true,
    [mysymb] : "mykey1"

}

// console.log(user.name);
// console.log(user["name"]);
// console.log(user[mysymb]);

user["name"] = "Surya";
// console.log(user["name"]);

// Object.freeze(user); // used to freeze object so that after initialization it can't be change
user["name"] = "Maheep";
// console.log(user["name"]);

// console.log(user);

user.greeting = function(){
    console.log(`Hello User`);
}

user.greetingTwo = function(){
    console.log(`Hello user, ${this.name /*user.name*/}`);
    
}
console.log(user.greeting());
console.log(user.greetingTwo());
