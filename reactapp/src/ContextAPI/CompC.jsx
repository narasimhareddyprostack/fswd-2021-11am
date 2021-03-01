import React from "react";
import { UserContext, MethodContext } from "./UserContext";

let CompC = () => {
  return (
    <React.Fragment>
      <hr />
      <h1> CompC</h1>
      <UserContext.Consumer>
        {(emp) => (
          <MethodContext.Consumer>
            {(getHike) => <span>{JSON.stringify(getHike())}</span>}
          </MethodContext.Consumer>
        )}
      </UserContext.Consumer>
    </React.Fragment>
  );
};
export default CompC;
