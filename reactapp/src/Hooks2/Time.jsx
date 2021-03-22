import React, { useState, useEffect } from "react";

function Time() {
  let [currentTime, setCurrentTime] = useState(new Date().toLocaleString());
  useEffect(() => {
    let time = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(time);
    };
  });
  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <h4>Digital Clock</h4>
              </div>
              <div className="card-body">
                <h1>{currentTime}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Time;
