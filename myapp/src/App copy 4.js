import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello",
    };
  }

  singleHandler = (value) => {
    this.setState({ message: value });
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <a href="/" className="navbar-brand">
            React Example
          </a>
        </nav>
        <h1> Message :{this.state.message}</h1>
        <button
          className="btn btn-success mr-5"
          onClick={this.singleHandler.bind(this, "GM")}
        >
          GM
        </button>
        <button
          className="btn btn-primary"
          onClick={this.singleHandler.bind(this, "Good Night")}
        >
          GN
        </button>
      </div>
    );
  }
}

export default App;
