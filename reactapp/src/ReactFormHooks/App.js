import React from "react";

import Registraion from "./ReactFormHooks/Registration";
let App = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark">
        <a href="/"> React Form - Hooks</a>
      </nav>
      <Registraion />
    </React.Fragment>
  );
};
export default App;
