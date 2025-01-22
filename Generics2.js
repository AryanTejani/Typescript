"use strict";
// function getRandomkeys<T>(obj: { [key: string]: T }): {
//   key: string;
//   value: T;
// } {
//   const keys = Object.keys(obj);
//   const randKeys = keys[Math.floor(Math.random() * keys.length)];
//   return { key: randKeys, value: obj[randKeys] };
// }
// const stringOnj = { a: "apple", b: "banana", c: "ch" };
// console.log(getRandomkeys(stringOnj));
// const numObj = { num1: 1, num2: 2, num3: 3 };
// console.log(getRandomkeys(numObj));
// function filterArr<T>(arr:T[],condition:(item:T)=>boolean):T[]{
//     return arr.filter((it)=>condition(it));
// }
function getRandomkeys(obj) {
    const keys = Object.keys(obj);
    const randKeys = keys[Math.floor(Math.random() * keys.length)];
    return { key: randKeys, value: obj[randKeys] };
}
const numObj = {
    one: 1,
    two: 2,
    three: 3,
};
const stringObj = {
    a: "apple",
    b: "banana",
    c: "cindrella",
};
console.log(getRandomkeys(numObj));
console.log(getRandomkeys(stringObj));
function filterArray(arr, condition) {
    return arr.filter((i) => condition(i));
}
const numArrray = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(filterArray(numArrray, (num) => num % 2 == 0));
const fArr = [
    { name: "apple", color: "red" },
    { name: "banana", color: "yellow" },
];
console.log(filterArray(fArr, (x) => x.color === 'red'));
