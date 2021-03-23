import React, { Component } from "react";
import Axios from "axios";
class HttpEx extends Component {
  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((respone) => {
        console.log(respone.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  /* getData = () => {
    //consume API
  }; */
  render() {
    return (
      <div>{/*   <button onClick={this.getData}> Get Data </button> */}</div>
    );
  }
}

export default HttpEx;
