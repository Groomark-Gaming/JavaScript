const name = "Groomark"
const repoCount = 50
// console.log(name + repoCount); 
// Thats old

// New
console.log(`Hello , My Name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('GTA-5-is-best-game')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('E'));

const newStr = gameName.substring(0,3)
console.log(newStr);

const anotherStr = gameName.slice(-9,-5)
console.log(anotherStr);

const newString1 = "     Groomark     "
console.log(newString1);
console.log(newString1.trim());

const url = "https://Groomark.com/Groomark%20Gaming"
console.log(url.replace('%20','-'));
console.log(url.includes('Groomark'));
console.log(gameName.split('-'));
