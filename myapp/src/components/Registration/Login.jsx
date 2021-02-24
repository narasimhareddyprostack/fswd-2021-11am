import React, { Component } from "react";

class Login extends Component {
  state = {
    mobile: "",
  };
  mobileHandler = (event) => {
    console.log(event.target.value);
    this.setState({ mobile: event.target.value });
  };
  sendOTP = (event) => {
    alert(`${this.state.mobile}`);
    event.preventDefault();
  };
  render() {
    return (
      <>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-5">
              <div className="card">
                <div className="card-header">
                  <p className="h2">Enter your mobile number</p>
                  <p className="h5">Provide a phone number to continue</p>
                </div>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Number"
                        onChange={this.mobileHandler}
                      />
                    </div>
                    <button className="btn btn-success" onClick={this.sendOTP}>
                      Send OTP
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
