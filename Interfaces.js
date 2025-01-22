"use strict";
// Interfaces with objects
const computerExample = [
    {
        name: "Lenovo",
        ram: 4,
        hdd: 256,
    },
    {
        name: "Dell",
        ram: 4,
        hdd: 512,
    },
];
console.log(computerExample[1].name);
const add = (a, b) => {
    return a + b;
};
const subs = (a, d) => a - d;
console.log(`Addition:${add(2, 3)} Substraction:${subs(2, 3)}`);
function greet(x) {
    console.log(`Hello ${x.name} ,How are You?`);
    x.hey();
}
const ary = {
    name: "Aryan",
    age: 19,
    hey() {
        console.log("hey");
    },
};
greet(ary);
