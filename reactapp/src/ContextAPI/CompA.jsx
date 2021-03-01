import React from "react";

import CompB from "./CompB";
let CompA = () => {
  return (
    <React.Fragment>
      <hr />
      <h1> CompA</h1>
      <CompB />
    </React.Fragment>
  );
};
export default CompA;
