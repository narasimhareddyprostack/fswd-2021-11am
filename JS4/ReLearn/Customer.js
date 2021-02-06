class Customer {
  bank_Name = "SBI";
  cust_Name = this.cust_Name;
  constructor(a) {
    console.log("Hello, GM... Constructor Executing", a);
  }
  getInfo() {
    console.log("getInfo method.... your Bank Name:", this.bank_Name);
    console.log(this.a);
  }
  checkBal() {
    console.log("your Bal amout 1 CR");
  }
}

let x = new Customer();
x.getInfo();

let a = new Customer("Arjun");
a.getInfo();
