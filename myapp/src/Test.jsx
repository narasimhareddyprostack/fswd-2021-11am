import React, { Component } from "react";

class Test extends Component {
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
          Decrement
        </button>
        <div>
          <h1>Counter Value: {this.state.counter}</h1>
          {console.log("Testing Component State value", this.state.counter)}
        </div>
        <h2> Total: {this.state.counter}</h2>
      </div>
    );
  }
}

export default Test;
