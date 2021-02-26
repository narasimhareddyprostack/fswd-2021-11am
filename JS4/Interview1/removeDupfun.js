function removeDuplicate(arr) {
  let resultArray = [];
  for (let i of arr) {
    if (resultArray.indexOf(i) === -1) {
      resultArray.push(i);
    }
  }
  console.log(resultArray);
}
let x = [10, 20, 20, 30, 20, 30];
removeDuplicate(x);
