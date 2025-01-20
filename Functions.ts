function addOne(num: number) {
  return num + 1;
}

const result = addOne(3);
console.log(result);

const mul = (x: number, y: number) => x * y;
const res = mul(2, 3);
console.log(res);

const greeting = (person: string = "Hi there") => console.log(person);
greeting("Sasuke");
console.log(`----------------`);
console.log("Return Function With arrow");
const ReturnFuncSquare1 = (x: number): number => {
  return x * x;
};
console.log(ReturnFuncSquare1(2));
console.log(`----------------`);
console.log("Return Function With arrow");
function ReturnFuncSquare2(x: number) {
  return x * x;
}
console.log(ReturnFuncSquare2(2));
console.log(`----------------`);
