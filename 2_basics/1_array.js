//arrays
console.log("-----ARRAY-----");
console.log();

const myArr = [0,1,2,3,4]
const myHeros = ["IRON-MAN","SPIDER-MAN","THOR","HULK"]
const myArr2 = new Array(1,2,3,4,5)
console.log(myArr[5]);
console.log(myHeros[0]);
console.log();

//Array Methods
console.log();
console.log("-----ARRAY METHODS-----");
console.log();


myArr.push(5)
myArr.push(7)
myArr.pop()//removes last value of an array
myArr.unshift(9)//adds array in the start
myArr.shift()//removes starting element in the array
console.log(myArr.includes(8));
console.log(myArr.indexOf(2));
console.log(myArr);

const newArr = myArr.join()
console.log(myArr);//array format
console.log(newArr);//converts arraya format to string format

console.log();
console.log("-----SLICE & SPLICE-----");
console.log();

console.log("A ",myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3)
console.log("C ",myArr);//chosen portion in splice get removed therefore myn2 shows 1,2,3
console.log(myn2);






