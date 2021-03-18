import React, { Fragment, useState } from "react";
let Employee = () => {
  /*   let [emp, one] = useState({ name: "Rajni", age: 70 });

  let changeName = () => {
    console.log("Testing");
    one({ ...emp, name: "Rajni Kanth" });
  }; */

  let [size, setSize] = useState([20, 30, 40]);

  let changeName = () => {
    console.log(size);
    setSize([...size, (size[2] = 40.5)]);
    console.log(size);
  };
  return (
    <Fragment>
      <h2> React Hooks Example</h2>
      <button className="btn btn-primary" onClick={changeName}>
        Change Name
      </button>
      <h2>{size}</h2>
    </Fragment>
  );
};

export default Employee;
