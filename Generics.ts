function printNum(x: number, y: number): [number, number] {
  return [x, y];
}

function printStr(x: string, y: string): [string, string] {
  return [x, y];
}

function printbool(x: boolean, y: boolean): [boolean, boolean] {
  return [x, y];
}

console.log(printNum(2, 3));
console.log(printStr("f", "s"));
console.log(printbool(true, false));

// ----------------- With Generics --------------------

function mixedDatatypes<T>(val1: T, val2: T): [T, T] {
  return [val1, val2];
}
console.log("With Generics : ");
console.log(mixedDatatypes<number>(2, 3));
console.log(mixedDatatypes<string>("Hi", "there"));
console.log(mixedDatatypes<boolean>(true, false));

interface dog {
  name: string;
  breed: string;
}

const dog1 = mixedDatatypes<dog>(
  { name: "Buddy", breed: "German Shefar" },
  { name: "Sasuke", breed: "Labarador" }
);

console.log(dog1);
