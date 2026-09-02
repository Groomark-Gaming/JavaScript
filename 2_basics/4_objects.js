// const tinderUser = new Object() //singleton object
const tinderUser = {}//non singleton object
tinderUser.id = "123abc"
tinderUser.name= "Sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser);
console.log();

const regularUser = {
    email : "Sum@gmail.com",
     fullName:{
        userFullName:{
            firstName : "GROOMARK",
            lastName : "GAMING"
        }
    }
}
console.log(regularUser.fullName.userFullName.firstName);
console.log();

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}
// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1,...obj2,...obj4}
console.log(obj3);
console.log();

const users = [
    {
        id :1,
        email:"abc@gmail.com"
    },
    {
        id :1,
        email:"abc@gmail.com"
    },
    {
        id :1,
        email:"abc@gmail.com"
    },
    {
        id :1,
        email:"abc@gmail.com"
    }
]


users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log();

const course = {
    coursename: "JS HINDI",
    price: "999",
    courseInstructor :"HITESH"
}

// course.courseInstructor

const {coursename : lmn} = course
console.log(lmn);
console.log();


//APIS
// {
//     coursename: "JS HINDI",
//     price: "999",
//     courseInstructor :"HITESH"
// }
[
    {},
    {},
    {}
]