import React from "react";
/* 
import ContactApp from "./FunCompContact/ContactApp"; */
import User from "./TODOList/User";
let App = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark">
        <a href="/"> Contact App - Function Components</a>
      </nav>
      <User />
    </React.Fragment>
  );
};
export default App;
