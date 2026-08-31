const marvelHeros = ["THOR","IRON-MAN","SPIDER-MAN"]
const dcHeros = ["SUPER-MAN","BAT-MAN","FLASH"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

const allHEROS = marvelHeros.concat(dcHeros)
console.log(allHEROS);

console.log("-----OR-----");

const allNewHeros = [...marvelHeros,...dcHeros]
console.log(allNewHeros);

console.log();
const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray);

console.log();

console.log(Array.isArray("GROOMARK"));
console.log(Array.from("GAMING"));
console.log(Array.from({name : "GAMING"}));//empty array intresting case

console.log();

let s1 = 100
let s2 = 200
let s3 = 300

console.log(Array.of(s1,s2,s3));


