import React from "react";
let CompC = (props) => {
  return (
    <React.Fragment>
      <h1> CompC</h1>
      <hr />
      <pre>{JSON.stringify(props)}</pre>
      <h4>Data from App.js : Emp Name :{props.empData.name}</h4>
    </React.Fragment>
  );
};
export default CompC;
