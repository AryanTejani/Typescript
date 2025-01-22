"use strict";
const person = {
    firstName: "Aryan",
    lastName: "Tejani",
    age: 18,
};
console.log(person.firstName, " ", person.lastName, " ", person.age);
// Function + Object
function Object1() {
    return {
        fname: "Aryan",
        lname: "Tejani",
    };
}
console.log(`fName : ${Object1().fname}\nlName : ${Object1().lname}`);
function passLObj(obj) {
    return {
        name: obj.name,
        location: obj.location,
        age: obj.age,
    };
}
console.log(`Name : ${passLObj({ name: "Sasuke", location: "Hidden Leaf", age: 18 }).name}
Location : ${passLObj({ name: "Sasuke", location: "Hidden Leaf", age: 18 }).location}
Age : ${passLObj({ name: "Sasuke", location: "Hidden Leaf", age: 18 }).age}`);
