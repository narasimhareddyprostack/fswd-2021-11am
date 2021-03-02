import React, { Component } from "react";
class HomePage extends Component {
  state = {
    isLoggin: true,
    message: "",
  };
  login = () => {
    this.setState({
      isLoggin: false,
      message: "Welcome to PSA",
    });
  };
  logout = () => {
    this.setState({
      isLoggin: true,
      message: "Thank you Visit Again",
    });
  };
  render() {
    return (
      <>
        <div className="card mt-5">
          <div className="card-header">
            <h4>Home Page</h4>
          </div>
          <div className="card-body">
            {this.state.isLoggin ? (
              <button className="btn btn-primary" onClick={this.login}>
                Login
              </button>
            ) : null}
            {!this.state.isLoggin ? (
              <button className="btn btn-danger" onClick={this.logout}>
                Logout
              </button>
            ) : null}
            <h2>{this.state.message}</h2>
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;
