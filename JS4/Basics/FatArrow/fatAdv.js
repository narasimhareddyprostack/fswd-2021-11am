function one() {
  console.log(this);
}
one();

let add = () => {
  console.log(this);
};

add();

/*
1. concise code - with help of developer life make easy./ Shorted Code
2. object context is less
3. Implicit return possible

4. overloading - conflicts

*/