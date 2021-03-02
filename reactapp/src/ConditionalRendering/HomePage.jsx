import React, { Component } from "react";
class HomePage extends Component {
  state = {
    isLoggin: true,
    message: "",
  };
  loginAndLogout = () => {
    this.setState({
      isLoggin: !this.state.isLoggin,
      message: "Welocome",
    });
  };
  render() {
    return (
      <>
        <div className="conatiner">
            <div className="row">
                <div className="col-md-6">
                <div className="card mt-5">
          <div className="card-header">
            <h4>Home Page</h4>
          </div>
          <div className="card-body">
            {this.state.isLoggin ? (
              <button className="btn btn-primary" onClick={this.loginAndLogout}>
                Login
              </button>
            ) : null}
            {!this.state.isLoggin ? (
              <button className="btn btn-danger" onClick={this.loginAndLogout}>
                Logout
              </button>
            ) : null}
            <h2>{this.state.message}</h2>
          </div>
        </div>
                </div>
            </div>
        </div>
      
      </>
    );
  }
}

export default HomePage;
