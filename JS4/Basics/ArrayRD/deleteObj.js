let emp = {
  name: "Ganesh",
  email: "ganesh@gmail.com",
  mobile: 9693,
  info: () => {
    console.log("Hello", emp.name);
  },
};
delete emp.mobile;
delete emp.info;

console.log(emp);
