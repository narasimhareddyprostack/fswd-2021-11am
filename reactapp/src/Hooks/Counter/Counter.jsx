import React, { useState } from "react";
let Counter = () => {
  let [count, setCount] = useState(1);
  /* let incrHandler = () => {
    setCount(count + 1);
  }; */
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">{count}</div>
              <div className="card-body">
                <button
                  className="btn btn-primary mr-4"
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  Counter
                </button>

                <button
                  className="btn btn-info"
                  onClick={() => {
                    setCount(count - 1);
                  }}
                >
                  Decr Count
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};
export default Counter;
