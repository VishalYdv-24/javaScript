// ytLink : https://www.youtube.com/watch?v=tGLCuoumaGY&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=13&t=1s


// mdn documentation : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

let myDate = new Date()
// console.log(myDate)
// console.log(typeof myDate)
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toString())

let createDate = new Date(2004,8,24) // (year,month-1,day,hours,minutes,seconds,milliseconds) months start from 0 to 11

// console.log(createDate);
// console.log(createDate.toDateString());
// console.log(createDate.toLocaleDateString());


let date2 = new Date("2004-09-24");
console.log(date2.toLocaleString());

let timeStamp = Date.now();
// console.log(timeStamp)
// console.log(date2.getTime())
// console.log(Math.floor(Date.now()/1000000))

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getFullYear())
// console.log(newDate.getMonth())
// console.log(newDate.getDate())
// console.log(newDate.getDay())

