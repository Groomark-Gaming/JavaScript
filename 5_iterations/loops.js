//for loop

for (let i = 1; i <= 10; i++) {
    const element = i;
    if (element==5 ) {
        console.log("5 is Best number");
        
    }
    console.log(element);
    
}
console.log("==============================");

for (let i = 1; i <= 10; i++) {
    console.log(`Outer Loop Values: ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        //console.log(`Inner Loop Values: ${j} and Inner loop ${i}`);
        console.log(`${i} x ${j} = ${i*j}`);
        
        
    }
    
}
console.log("==============================");


let myArray = ["Iron-Man","Loki","Spider-Man","Thor"]
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}
console.log("==============================");

//break and continue

for (let ja = 1; ja < 20; ja++) {
    if (ja == 5) {
        console.log("Detected 5");
        
        break;
    }
    console.log("Value of JA is "+ja);
    
}
console.log("==============================");
for (let conti = 1; conti < 20; conti++) {
    if (conti == 5) {
        console.log("Detected 5");
        continue;
    }
    console.log("Value of Continue is "+conti);
    
}