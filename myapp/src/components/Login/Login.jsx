import React, { Component } from "react";
class Login extends Component {
  state = {
    name: "",
  };
  changeHandler = (event) => {
    console.log(event.target.value);
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              {0 ? null : (
                <form>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder=" User Name"
                      value={this.state.name}
                      onChange={this.changeHandler}
                      disabled
                    />
                  </div>
                  <button className="btn btn-success"> Submit</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
