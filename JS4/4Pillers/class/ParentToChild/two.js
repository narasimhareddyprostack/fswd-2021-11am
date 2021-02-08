class ClassNameOne {
  minBal = 500;
  getBal() {
    console.log("Min Bal Amount is:", this.minBal);
    return "";
  }
}
let a = new ClassNameOne();
console.log(a.getBal());
let b = new ClassNameOne();
console.log(b);
