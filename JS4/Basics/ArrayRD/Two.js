//how to read object properties and methods

let emp = {
  name: "Ganesh",
  email: "ganesh@gmail.com",
  mobile: 9693,
  info: () => {
    console.log("Hello", emp.name);
  },
};

console.log(emp);
//how to read Obj properties
console.log(emp.email);
//how to read obj methods
emp.info();

// update/create new property
emp.mobile = 9434343434;
emp.sal = 0;

console.log(emp);

console.log(" .... read property ", emp["sal"]);

delete emp;

console.log(emp);
