const jwt = require("jsonwebtoken");
let payload = {
  name: "kavitha",
  email: "greetlabs@gmail.com",
};
let jwt_Secret_Key = "5dfdfdf";
let token = jwt.sign(payload, jwt_Secret_Key, { expiresIn: 60 * 60 });

console.log(token);
//send to client and we are storing in browser local storage

jwt.verify(token, jwt_Secret_Key, (err, data) => {
  if (err) throw err;
  console.log(data);
});
