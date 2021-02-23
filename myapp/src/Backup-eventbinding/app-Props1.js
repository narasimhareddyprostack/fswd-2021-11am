import React, { Component } from "react";
import Payment from "./Payment/Payment";
class App extends Component {
  name = "Raj";
  loc = [10, 20, 30];
  emp = {
    emp_No: 101,
    emp_Name: "Kumar",
    emp_sal: "1000USD",
  };
  render() {
    return (
      <>
        <h1> Testing</h1>
        <Payment one={this.name} two={this.loc} three={this.emp} />
      </>
    );
  }
}
export default App;
