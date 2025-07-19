// ytLink : https://www.youtube.com/watch?v=9ksqBa8_txM&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=23

const miniProject = {
    totalMember : 3,
    title : "Smart Vaccum Cleaner",
    memberNames : ["Vishal","Shreyash","Srushti"],
    memberRollNo : [24,25,26],
    teamLeader : "Vishal",

    printGreet : function(){
        // console.log(`${this.teamLeader} give me the project report.`); // this "this" is only usefull for current scope "{...}" and this won't be useful out of scope 
        console.log(this);
        
    }
}

miniProject.printGreet();
console.log(this); // here this will show empty object because it is not called under any object scoope.


// and this will are not used generally into arrow function

// just go through video for better understanding of this

// ARROW FUNCTION

const addTwo = (num1,num2)=>{
    return num1+num2; // if using scope then it's compulsory to use return
}
// console.log(addTwo(9,8));


const mulTwo = (num1,num2) => num1*num2; // here no need to mention return
// console.log(mulTwo(2,8));

const divTwo = (num1,num2) => (num1/num2); // here too no need to mention return
// console.log(divTwo(16,8));

// using arrow function with Object

const obArr = () => ({username : "vishal"});
console.log(obArr());
