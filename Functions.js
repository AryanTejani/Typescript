"use strict";
function addOne(num) {
    return num + 1;
}
const result = addOne(3);
console.log(result);
const mul = (x, y) => x * y;
const res = mul(2, 3);
console.log(res);
const greeting = (person = "Hi there") => console.log(person);
greeting("Sasuke");
console.log(`----------------`);
console.log("Return Function With arrow");
const ReturnFuncSquare1 = (x) => {
    return x * x;
};
console.log(ReturnFuncSquare1(2));
console.log(`----------------`);
console.log("Return Function With arrow");
function ReturnFuncSquare2(x) {
    return x * x;
}
console.log(ReturnFuncSquare2(2));
console.log(`----------------`);
