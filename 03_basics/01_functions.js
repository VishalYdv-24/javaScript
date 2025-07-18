// 01_function_part01
// ytLink : https://www.youtube.com/watch?v=Bn56WahG_t0&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=19

// in this part he introduced with basic function parameters, like return, syntax, and how to call, which i knew already so i did;nt wroks on this into code.

console.log("01_fucnion_part01");

const sum = function(num1,num2){
    return num1+num2;
   
} 

num1 =5;
num2 =6;


// console.log(sum(num1,num2));

console.log(" ");


// 01_fucnion_part02
// ytLink : https://www.youtube.com/watch?v=t7ZHPhgdA4U&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=20
console.log("01_fucnion_part02");

const calculateCartPrice = function(...num){
    return num;
}

// console.log(calculateCartPrice(500,100,150,800));


const miniProject = {
    totalMember : 3,
    title : "Smart Vaccum Cleaner",
    memberNames : ["Vishal","Shreyash","Srushti"],
    memberRollNo : [24,25,26],
    teamLeader : "Vishal"
}

function handleObject(anyObject) {
    console.log(`Project Title: ${anyObject.title}`);
    console.log(`Team Leader: ${anyObject.teamLeader}`);
    console.log(`Team Members: ${anyObject.memberNames.join(", ")}`);
    
}

handleObject(miniProject);