import React, { Component } from "react";

export class Registration extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };
  formHandler = (event) => {
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
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
          <input type="text" onChange={this.formHandler} name="name" /> <br />
          <br />
          <label>Email</label>
          <input type="email" onChange={this.formHandler}name="email" /> <br />
          <br />
          <label>Password</label>
          <input type="text" onChange={this.formHandler} name="password" /> <br />
          <br />
          <input type="submit" value="Submit" onClick={this.btnHanlder} />
        </form>
      </div>
    );
  }
}

export default Registration;
