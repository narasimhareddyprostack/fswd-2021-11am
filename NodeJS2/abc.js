const bcrypt = require("bcryptjs");

let user_Login = {
  email: "greetlabs@gmail.com",
  password: "123456",
  cc:4356789433334444
};

let salt = bcrypt.genSaltSync(10);
newPassword = bcrypt.hashSync(user_Login.password, salt);

let new_Login_Details = { ...user_Login, password: newPassword };
console.log(new_Login_Details);
if (bcrypt.compareSync(user_Login.password, new_Login_Details.password)) {
  console.log("Password Match");
} else {
  console.log("Password Does not match");
}
