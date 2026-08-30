//Dates
console.log("-----DATES-----");

let myDates = new Date()
console.log(myDates);
console.log(myDates.toString());
console.log(myDates.toDateString());
console.log(myDates.toISOString());
console.log(myDates.toJSON());
console.log(myDates.toLocaleDateString());
console.log(myDates.toLocaleString());
console.log(myDates.toLocaleTimeString());
console.log(myDates.toTimeString());
console.log(myDates.toUTCString());
console.log();
console.log(typeof myDates);
console.log();

let myCreatedDate = new Date(2026,2,27)
console.log(myCreatedDate.toDateString());

let newCreatedDate = new Date(2026,2,27,19,30,59)
console.log(newCreatedDate.toLocaleString());

let otherCreatedDate = new Date("2026-03-27")//yyyy-mm-dd
console.log(otherCreatedDate.toDateString());

let anotherCreatedDate = new Date("02-03-2020")//mm-dd-yyyy
console.log(anotherCreatedDate.toDateString());
console.log();

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(anotherCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));
console.log();

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth()+1);
console.log(newDate.getFullYear());
console.log(newDate.getDay()+1);

console.log(newDate.toLocaleString('default',{
    weekday: "long",
    year:"numeric"
}));
