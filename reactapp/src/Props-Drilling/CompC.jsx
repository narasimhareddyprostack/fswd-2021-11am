import React from "react";
let CompC = (props) => {
  return (
    <React.Fragment>
      <hr />
      <h1> CompC</h1>

      <pre>{JSON.stringify(props)}</pre>
      <h4>Data from App.js : Emp Name :{props.name}</h4>
    </React.Fragment>
  );
};
export default CompC;
