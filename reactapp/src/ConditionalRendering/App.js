import React, { Component } from "react";
/* import HomePage from "./ConditionalRendering/HomePage";
 */
import PreferredLoc from "./ConditionalRendering/PreferredLoc";
import SelectLoc from "./ConditionalRendering/SelectLoc";
class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <a href="/"> React Conditional Rending</a>
        </nav>
        {/*  <HomePage /> */}
        {/*  <PreferredLoc /> */}
        <SelectLoc />
      </div>
    );
  }
}

export default App;
