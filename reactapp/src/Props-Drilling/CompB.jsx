import React from "react";
import CompC from "./CompC";
let CompB = (props) => {
  return (
    <React.Fragment>
      <hr />
      <h1> CompB</h1>

      <pre>{JSON.stringify(props)}</pre>
      <CompC name={props.name} />
    </React.Fragment>
  );
};
export default CompB;
