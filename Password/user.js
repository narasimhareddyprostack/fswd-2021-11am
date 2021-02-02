const bcrypt = require("bcryptjs");
let user = {
  name: "Narasimha",
  passwrod: "123@3333",
};

let salt = bcrypt.genSaltSync(10);
let newPassword = bcrypt.hashSync(user.passwrod, salt);
console.log(newPassword);

let newUser = {
  ...user,
  passwrod: newPassword,
};

console.log(newUser);


/*
> npm init -y 
>npm i experss bcryptjs

>node one.js
*/