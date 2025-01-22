// Interfaces with objects

interface Computer {
  name: string;
  ram: number;
  hdd: number;
}

const computerExample: Computer[] = [
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

// Interfaces with classes

interface func {
  (x: number, y: number): number;
}

const add: func = (a, b) => {
  return a + b;
};
const subs: func = (a, d) => a - d;

console.log(`Addition:${add(2, 3)} Substraction:${subs(2, 3)}`);

// Interfaces with objects + function

interface ObjFunc {
  name: string;
  age: number;
  hey(): void;
}

function greet(x: ObjFunc) {
  console.log(`Hello ${x.name} ,How are You?`);
  x.hey();
}

const ary: ObjFunc = {
  name: "Aryan",
  age: 19,
  hey() {
    console.log("hey");
  },
};

greet(ary);
