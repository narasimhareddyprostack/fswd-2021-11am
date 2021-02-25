import React, { Component } from "react";

class ChildCard extends Component {
  state = {
    childMsg: "",
  };
  value = 100;
  sendDatatoParent = () => {
    this.props.parentMethod(this.state.childMsg);
  };
  childHalder = (e) => {
    this.setState({ childMsg: e.target.value }, () => {
      this.sendDatatoParent();
    });
  };
  render() {
    return (
      <>
        <div className="card">
          <div className="card-body bg-info">
            <pre>Parent Data: {JSON.stringify(this.props)}</pre>
            <h1>Parent Data: {this.props.data}</h1>

            <br />
            <br />
            <form>
              <input
                type="text"
                placeholder="child data"
                value={this.state.childMsg}
                onChange={this.childHalder}
              />
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default ChildCard;
