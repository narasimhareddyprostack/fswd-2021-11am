import React, { Component } from "react";

class App extends Component {
  state = {
    counter: 0,
  };
  calTax() {
    console.log("Testing");
  }
  incrHandler() {
    this.setState({ counter: this.state.counter + 1 });
  }
  decrHandler = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  render() {
    return (
      <div>
        <h1>Counter Value: {this.state.counter}</h1>
        <button
          className="btn btn-primary mr-2"
          onClick={() => {
            this.incrHandler();
          }}
        >
          Increment
        </button>
        <button className="btn btn-info" onDoubleClick={this.decrHandler}>
          {" "}
          Decrement
        </button>
        <div>
          <h1>Counter Value: {this.state.counter}</h1>
          <button
            className="btn btn-primary mr-2"
            onClick={() => {
              this.incrHandler();
            }}
          >
            Increment
          </button>
          <button className="btn btn-info" onDoubleClick={this.decrHandler}>
            Decrement
          </button>
        </div>
        <h2> Total: {2}</h2>
      </div>
    );
  }
}

export default App;
