const myObj = {
    js:"JavaScript",
    cpp:"C++",
    rb:"Ruby",
    swift:"Swift by apple"
}

for (const key in myObj) {
    console.log(`${key} Shortcut is for ${myObj[key]}`);
    
}

console.log("====================");

const programming = ["js","Python","c++"]
for (const key in programming) {
   console.log(programming[key]);
   
}