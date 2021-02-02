/* let emp = { name: "narasuimha", name: "ramesh" };

console.log(emp.name); */

let stackholder = {
  name: "Ramesh Rao",
  address: "PSA ------Bangalore 47",
};

let client = {
  name: "Client - Ramesh",
  address: "MG Road - Bangalroe",
};

let newObj = {
  ...stackholder,
  ...client,
};
console.table(newObj);
