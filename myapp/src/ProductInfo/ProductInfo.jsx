import React from "react";

function ProductInfo(props) {
  console.log("Hello, GM", props);
  let { x, productName } = props;
  return (
    <>
      {" "}
      <pre>{JSON.stringify(props)}</pre>
      <h1> Hello, Testing</h1>
      {x} {productName} {props.tax}
    </>
  );
}

export default ProductInfo;
