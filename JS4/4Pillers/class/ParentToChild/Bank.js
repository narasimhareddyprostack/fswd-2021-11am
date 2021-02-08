class BankRules {
  constructor(minBal) {
    this.minBal = minBal;
  }
  rules() {
    console.log("Min Balance is :", this.minBal);
  }
}
class BankCustomer extends BankRules {
  constructor(acc_No, acc_Name, acc_MinBal) {
    super(acc_MinBal);
    this.acc_No = acc_No;
    this.acc_Name = acc_Name;
  }
  getInfo() {
    console.log("Min:", this.minBal);
  }
}

let c = new BankCustomer(101, "Chiranjeevi", 500);
console.log(c);
c.rules();
c.getInfo();

let g = new BankCustomer(102, "Ganesh", 1500);
console.log(g);
g.rules();
g.getInfo();
