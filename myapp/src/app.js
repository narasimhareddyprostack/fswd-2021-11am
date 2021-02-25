import React from "react";

import ParentCard from "./TwoWay/Card/ParentCard";
function App() {
  return (
    <div>
      <div className="navbar navbar-dark bg-dark">
        <a href="/'" className="navbar-brand">
          Two Data Binding
        </a>
      </div>
      <ParentCard />
    </div>
  );
}

export default App;
