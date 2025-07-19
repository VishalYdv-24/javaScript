// Immediately Invoked Function Expression (IIFE)

// ytLink : https://www.youtube.com/watch?v=GAIbn16Iytc&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=24

function printHello (name) {
    console.log(`Hello, ${name} ! `);
    
}

printHello("Vishal");

// named IIFE
(function printHello2 (name) {
    console.log(`Hello, ${name} ! `);
    
})("Surya");
// using arrow fucntion into iife


// unNamed IIFE
((name) => {
    console.log(`Hello, ${name}!`);
    
})("Ritu");