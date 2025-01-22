"use strict";
class Person {
    constructor(name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }
    getname() {
        return `${this.name} ${this.age} ${this.location}`;
    }
}
class PersonX extends Person {
    constructor(name, age, location) {
        super(name, age, location);
    }
}
const Person1 = new Person("Aryan", 18, "Gujarat");
// Person1.name = 'x'
// console.log(Person1.age); Because we declare age as a private.
console.log(Person1);
console.log(Person1.getname());
const ExtendPerson = new PersonX("Aryan", 19, "Surat");
console.log(ExtendPerson.getname());
class addition {
    add() {
        // console.log("hi there");
        return 1;
    }
}
const add1 = new addition();
console.log(add1.add());
