let password: string | number = "Hi there";
console.log(typeof password);

type userInfo1 = {
  name: string;
  age: number;
  location: string;
};

type AccountInfo1 = {
  email: string;
  password: string;
};

type user1 = userInfo1 | AccountInfo1;

const Aryan1: user1 = {
  email: "iamaryan@gmail.com",
  password: "123456",
};

console.log(Aryan1);

const items1: (number | string)[] = [1, 2, "Maa"];
console.log(items1);
