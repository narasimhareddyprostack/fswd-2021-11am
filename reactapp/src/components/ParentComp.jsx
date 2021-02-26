import React from "react";
import ChildComp from "./ChildComp";
class ParentComp extends React.Component {
  state = {
    childMsg: "",
  };
  receiveData = (value) => {
    console.log("Testing data..", value);
    this.setState({
      childMsg: value,
    });
  };
  render() {
    return (
      <>
        <h1>Parent Comp - Testing</h1>

        <h5>Child Data from Child Comp ...:{this.state.childMsg}</h5>
        <hr />
        <ChildComp data={this.receiveData} one={"biscuit"} />
      </>
    );
  }
}
export default ParentComp;
