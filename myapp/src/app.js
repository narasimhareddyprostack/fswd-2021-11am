import React, { Component } from "react";

class App extends Component {
  state = {
    name: "Test Name...",
    age: 37,
  };
  nameHandler = () => {
    this.setState({
      name: "Narasimha",
      age: 38,
    });
  };
  render() {
    return (
      <div>
        <h1> Emp Name: {this.state.name}</h1>
        <h2> Emp Age : {this.state.age}</h2>
        <button className="btn btn-primary" onClick={this.nameHandler}>
          {" "}
          Change Emp Details
        </button>
      </div>
    );
  }
}

export default App;
