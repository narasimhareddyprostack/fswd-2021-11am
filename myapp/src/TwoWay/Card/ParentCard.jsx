import React, { Component } from "react";

import ChildCard from "./ChildCard";

class ParentCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentData: "",
      size: [10, 20],
      childData: "",
    };
  }
  changeData = (event) => {
    this.setState({ parentData: event.target.value });
  };
  parentMethod = (value) => {
    this.setState({
      childData: value,
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card mt-5">
                <div className="card-header">
                  <h2>Parent Component</h2>
                  <h5>child Data:{this.state.childData}</h5>
                </div>
                <div className="card-body bg-primary">
                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Parent Data"
                        value={this.state.parentData}
                        onChange={this.changeData}
                      />
                    </div>
                  </form>
                </div>
              </div>
              <ChildCard
                data={this.state.parentData}
                parentMethod={this.parentMethod}
                parentArray={this.state.size}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ParentCard;
