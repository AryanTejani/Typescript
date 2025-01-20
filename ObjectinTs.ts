const person: { firstName: string; lastName: string; age: number } = {
  firstName: "Aryan",
  lastName: "Tejani",
  age: 18,
};

console.log(person.firstName, " ", person.lastName, " ", person.age);

// Function + Object

function Object1(): { fname: string; lname: string } {
  return {
    fname: "Aryan",
    lname: "Tejani",
  };
}

console.log(`fName : ${Object1().fname}\nlName : ${Object1().lname}`);

function passLObj(obj: { name: string; location: string; age: number }): {
  name: string;
  location: string;
  age: number;
} {
  return {
    name: obj.name,
    location: obj.location,
    age: obj.age,
  };
}

console.log(`Name : ${
  passLObj({ name: "Sasuke", location: "Hidden Leaf", age: 18 }).name
}
Location : ${
  passLObj({ name: "Sasuke", location: "Hidden Leaf", age: 18 }).location
}
Age : ${passLObj({ name: "Sasuke", location: "Hidden Leaf", age: 18 }).age}`);
