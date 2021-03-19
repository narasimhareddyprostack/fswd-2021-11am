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
            {(getHike) => (
              <span>
                {/*  {JSON.stringify(getHike())} {JSON.stringify(emp)} */}
                <h1> Employee Name: {emp.name}</h1>
                <h1> Employee Salary: {emp.sal}</h1>
              </span>
            )}
          </MethodContext.Consumer>
        )}
      </UserContext.Consumer>
    </React.Fragment>
  );
};
export default CompC;
