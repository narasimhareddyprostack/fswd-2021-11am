import React, { Component } from "react";

export class Registration extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };
  nameHandler = (event) => {
    console.log(event.target.value);
    this.setState({ name: event.target.value });
  };
  emailHandler = (event) => {
    console.log(event.target.value);
    this.setState({ email: event.target.value });
  };
  passwordHandler = (event) => {
    this.setState({ password: event.target.value });
  };
  btnHanlder = (e) => {
    console.log(this.state);

    e.preventDefault();
  };
  render() {
    return (
      <div>
        <h1>Registration Page</h1>
        <form>
          <label>Name</label>
          <input type="text" onChange={this.nameHandler} /> <br />
          <br />
          <label>Email</label>
          <input type="email" onChange={this.emailHandler} /> <br />
          <br />
          <label>Password</label>
          <input type="text" onChange={this.passwordHandler} /> <br />
          <br />
          <input type="submit" value="Submit" onClick={this.btnHanlder} />
        </form>
      </div>
    );
  }
}

export default Registration;
