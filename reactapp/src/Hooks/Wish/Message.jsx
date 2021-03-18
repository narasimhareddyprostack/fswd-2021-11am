import React, { useState } from "react";
let Message = () => {
  let [message, setMessage] = useState("Hello,");
  let inputHandler = (value) => {
    setMessage(value);
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">{message}</div>
              <div className="card-body">
                <button
                  className="btn btn-success mr-5"
                  onClick={() => {
                    setMessage("Hello, GM");
                  }}
                >
                  Good Morning
                </button>
                <button
                  className="btn btn-success mr-5"
                  onClick={inputHandler.bind(this, "Godd Afternoon")}
                >
                  Good Afternoon
                </button>
                <button className="btn btn-success mr-5"> Good Night</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Message;
