const marvelHeros = ["captain America","Ironman","Thor","Spiderman"];
const dcHeros = ["Batman","Superman","Flash"];
// marvelHeros.push(dcHeros);
// console.log(marvelHeros);
// console.log(marvelHeros[4][2]);

const allHeros = marvelHeros.concat(dcHeros);

// console.log(allHeros);

const allNewHeros = [...marvelHeros,...dcHeros];
console.log(allNewHeros);
