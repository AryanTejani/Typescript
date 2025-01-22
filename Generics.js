"use strict";
function printNum(x, y) {
    return [x, y];
}
function printStr(x, y) {
    return [x, y];
}
function printbool(x, y) {
    return [x, y];
}
console.log(printNum(2, 3));
console.log(printStr("f", "s"));
console.log(printbool(true, false));
// ----------------- With Generics --------------------
function mixedDatatypes(val1, val2) {
    return [val1, val2];
}
console.log("With Generics : ");
console.log(mixedDatatypes(2, 3));
console.log(mixedDatatypes("Hi", "there"));
console.log(mixedDatatypes(true, false));
const dog1 = mixedDatatypes({ name: "Buddy", breed: "German Shefar" }, { name: "Sasuke", breed: "Labarador" });
console.log(dog1);
