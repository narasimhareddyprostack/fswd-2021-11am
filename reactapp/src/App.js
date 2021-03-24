import React from "react";

import ContactApp from "./FunCompContact/ContactApp";
let App = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark">
        <a href="/"> Contact App - Function Components</a>
      </nav>
      <ContactApp />
    </React.Fragment>
  );
};
export default App;
