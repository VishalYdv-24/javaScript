// ytLink : https://www.youtube.com/watch?v=4lb2pXWWXJI&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=17

// singleton object 
// const pubg = new Object();
const pubg = {};
console.log(pubg);

pubg.character = "male";
pubg.name = "Vsihal";
pubg.kD = 4.2;
pubg.tire = "ace";

// console.log(pubg);

// now we can also make object into object like nested object 
// make sure to console log this example fo rbetter understanding
const regularApp = {
    fullname : {
        userFullName : {
            firstName : "vishal",
            lastName : "Yadav"
        }
    }
}

// console.log(regularApp);
// console.log(regularApp.fullname.userFullName.firstName);
// console.log(regularApp.fullname.userFullName.lastName);

// here we learned how to merge objects into one object
const Obj1 = {
    1 : "a",
    2 : "b"
}

const Obj2 = {
    3 : "c",
    4 : "d"
}
// merging type 1
// const MergeObject = {Obj1,Obj2}

// merging type 2
// const MergeObject = Object.assign({},Obj1,Obj2);

// merging type 3 (recommended and easier)
const MergeObject = {...Obj1,...Obj2};
// console.log(MergeObject);


// object into array this is how normally the data is stored if we fetch it from database
const DBdata = [
    {
        id:5,
        name:"vishal",
    },
    {
        gender : "male",
        height : 5.8
    },
    {
        favColor : "pink",
        favFood : "biryani"
    }
]

// console.log(DBdata[2].favColor);

// will use pubg object as example to fetch keys/values/entries(paair of both key : value) of any object and that would be into array 

console.log(Object.keys(pubg));
console.log(Object.values(pubg));
console.log(Object.entries(pubg));

// to check if the object has that key or not 
console.log(pubg.hasOwnProperty('name'));

