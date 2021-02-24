import React from "react";
import Registration from "./components/Registration/Registration";

import Login from "./components/Registration/Login";

function App() {
  return (
    <div>
      {/* <Registration /> */}
      <div className="navbar navbar-dark bg-dark">
        <a href="/'" className="navbar-brand">
          Yellow Class - Mobile Registration
        </a>
      </div>
      <Login />
    </div>
  );
}

export default App;
