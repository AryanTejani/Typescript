type userInfo = {
    name:string,
    age:number,
    location:string
}

type AccountInfo = {
    email:string,
    password:string
}

type user = userInfo & AccountInfo;

const Aryan : user = {
    name:'Aryan',
    age:19,
    location:'Suart',
    email:'iamaryan@gmail.com',
    password:'123456'
}

console.log(Aryan);