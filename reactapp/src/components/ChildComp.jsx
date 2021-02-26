import React from "react";
class ChildComp extends React.Component {
  state = {
    childmsg: "",
  };
  sendData = () => {
    this.props.data("Sending 50000 INR");
  };
  render() {
    return (
      <>
        <h1>Child Comp Data</h1>
        <pre>{ JSON.stringify(this.props)}</pre>
        <button onClick={this.sendData}> Send Data from Child</button>
      </>
    );
  }
}
export default ChildComp;
