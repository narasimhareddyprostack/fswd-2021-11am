import React from "react";
import CompC from "./CompC";
let CompB = (props) => {
  return (
    <React.Fragment>
      <h1> CompB</h1>
      <hr />
      <pre>{JSON.stringify(props)}</pre>
      <CompC empData={props.empData} />
    </React.Fragment>
  );
};
export default CompB;
