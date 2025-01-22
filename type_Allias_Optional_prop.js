"use strict";
const printUser = (user) => {
    return `Name : ${user.name} Age : ${user.age} Location : ${user.location}`;
};
console.log(printUser({ name: "Aryan", age: 18, location: "India" }));
const user = {
    name: "Aryan",
    location: "Surat",
};
// Here age isn't give us error if we didn't provide it
// because we use optional property here.(In obj_optional)
console.log(user.name, " ", user.age);
