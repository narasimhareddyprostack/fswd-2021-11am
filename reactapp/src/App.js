import React from "react";

import { EmployeeApp } from "./Employee-List/EmployeeApp";

function App() {
  return (
    <>
      <nav className="navbar nav-dark bg-dark">
        <a href="/"> React List Rending</a>
      </nav>
      <EmployeeApp />
    </>
  );
}

export default App;
