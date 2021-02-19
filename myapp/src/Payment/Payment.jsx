import React from "react";
let Payment = (props) => {
  return (
    <>
      <h1>Payment Comp</h1>

      <h2> Name: {props.one}</h2>
      <h5> Array Data: {props.two[0]}</h5>
      <h3> Obj : {props.three.emp_Name}</h3>
    </>
  );
};

export default Payment;
