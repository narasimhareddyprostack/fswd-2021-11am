import React, { Component } from "react";
import Navbar from "./Navbar/Navbar";
class App extends Component {
  state = {
    msg: "Hello",
  };
  changeMsg(value) {
    this.setState({ msg: value });
  }
  render() {
    return (
      <>
        <Navbar />
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h4>Messge: {this.state.msg}</h4>
                </div>
                <div className="card-body">
                  <button
                    className="btn btn-success mr-3"
                    onClick={this.changeMsg.bind(this, 1)}
                  >
                    GM
                  </button>
                  <button
                    className="btn btn-primary mr-3"
                    onClick={this.changeMsg.bind(this, 2)}
                  >
                    GA
                  </button>
                  <button
                    className="btn btn-info"
                    onClick={this.changeMsg.bind(this, 3)}
                  >
                    GN
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
