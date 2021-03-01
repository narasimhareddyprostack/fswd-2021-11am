import React from "react";
import CompC from "./CompC";
import { UserContext } from "./UserContext";
let CompB = () => {
  return (
    <React.Fragment>
      <hr />
      <h1> CompB</h1>
      <UserContext.Consumer>
        {(emp) => <span>{JSON.stringify(emp)}</span>}
      </UserContext.Consumer>
      <CompC />
    </React.Fragment>
  );
};
export default CompB;
