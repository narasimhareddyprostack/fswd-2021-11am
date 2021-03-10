import React from "react";
import WishMessage from "./Wish/WishMessage";
let App = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark">
        <a href="/"> React Redux Basic Example</a>
      </nav>
      <WishMessage />
    </React.Fragment>
  );
};
export default App;
