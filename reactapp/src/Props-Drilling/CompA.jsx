import React from "react";

import CompB from "./CompB";
let CompA = (props) => {
  return (
    <React.Fragment>
      <h1> CompA</h1>
      <hr />
      <pre>{JSON.stringify(props)}</pre>
      <CompB name={props.name} />
    </React.Fragment>
  );
};
export default CompA;
