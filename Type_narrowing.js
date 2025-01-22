"use strict";
// Instance of oprator
class Dog {
    bark() {
        console.log("bark");
    }
}
class Cat {
    Meow() {
        console.log("meow meow");
    }
}
function animalSound(instance) {
    if (instance instanceof Dog) {
        instance.bark();
    }
    else {
        instance.Meow();
    }
}
const myDog = new Dog();
const myCat = new Cat();
animalSound(myDog);
animalSound(myCat);
// String or number Type narrowing
console.log("---------------------\nType Narrowing\n-------------------");
function exampleTypenarrowing(val) {
    if (typeof val === "string") {
        return val.toUpperCase();
    }
    else {
        return val.toFixed(1);
    }
}
console.log(exampleTypenarrowing("hey there"));
console.log(exampleTypenarrowing(4));
// Intersection types
console.log("---------------------\nIntersection Type Narrowing\n-------------------");
const ManagerWithEmployee = {
    name: 'Aryan',
    id: 1,
    department: 'CS',
    role: 'Intern'
};
console.log(ManagerWithEmployee.name);
