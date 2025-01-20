type obj = {
  name: string;
  age: number;
  location: string;
};

const printUser = (user: obj) => {
  return `Name : ${user.name} Age : ${user.age} Location : ${user.location}`;
};

console.log(printUser({ name: "Aryan", age: 18, location: "India" }));

// Optional Property in object
//means we can provide that or not it diden't give an error

type obj_Optional = {
  name: string;
  age?: number;
  location: string;
};

const user: obj_Optional = {
  name: "Aryan",
  location: "Surat",
};

// Here age isn't give us error if we didn't provide it
// because we use optional property here.(In obj_optional)
console.log(user.name, " ", user.age);
