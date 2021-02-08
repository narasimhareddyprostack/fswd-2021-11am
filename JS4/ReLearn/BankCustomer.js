class BankCustomer {
  bank_Name = "SBI";
  constructor(name, mobile, email, type) {
    this.custName = name;
    this.custMobile = mobile;
    this.custEmail = email;
    this.custType = type;
  }
  getBal() {
   
    console.log("New Accout Opened.. for:", this.custName);
  }   
  
}

let Arjun = new BankCustomer("arjun", 9591619191, "arjun@gmail.com", "savings");

console.log(Arjun);
Arjun.getBal();
/* 
let Imran = new BankCustomer("Imarn", 9999999, "imran@gmail.com", "current");
console.log(Imran);
Imran.getBal();
 */
