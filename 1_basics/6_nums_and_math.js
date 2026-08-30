console.log("-------NUMBERS------");
console.log();

const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNum = 69.6767
console.log(otherNum.toPrecision(3));

const hunderds = 1000000
console.log(hunderds.toLocaleString('en-IN'));
console.log();

console.log("-------MATHS------");
console.log();
console.log(Math);
console.log(Math.abs(-67));//abs = only negative to positive
console.log(Math.round(69.6762));//rounding off the value
console.log(Math.ceil(69.21));//ceil = celling ie top number
console.log(Math.floor(69.6762));//floor = bottom value
console.log(Math.sqrt(69).toFixed(3));//to fine square root of the number
console.log(Math.min(2,5,8,1,6,3));
console.log(Math.max(2,5,8,1,6,3));
console.log(Math.random())
console.log((Math.random()*10) + 1);//always value is in between 0 and 1


const max = 20
const min = 10

console.log(Math.floor(Math.random() * (max - min +1)) + min);//to get random numbers in between 10 - 20


