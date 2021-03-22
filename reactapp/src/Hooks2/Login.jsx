import React, { Component } from "react";

export class Login extends Component {
  componentDidMount() {
    console.log("component Did Mount Execuinig ");
  }
  componentWillUnmount() {
    console.log("componet Will Un Mounting Executing");
  }
  render() {
    return (
      <div>
        <h1>Component Life Cycle Method</h1>
      </div>
    );
  }
}

export default Login;
