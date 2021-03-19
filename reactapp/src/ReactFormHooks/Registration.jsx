import React, { useState } from "react";
let Registraion = () => {
  let [user, setUser] = useState({
    userName: "",
    email: "",
    mobile: "",
  });
  let updateInput = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  let submitData = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={submitData}>
              <div className="form-group">
                <input
                  className="form-control"
                  onChange={updateInput}
                  type="text"
                  placeholder="User Name"
                  name="userName"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="email"
                  onChange={updateInput}
                  name="email"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  onChange={updateInput}
                  type="text"
                  placeholder="mobile"
                  name="mobile"
                />
              </div>

              <div className="form-group">
                <input
                  type="submit"
                  className=" btn btn-success form-control"
                />
              </div>
            </form>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">{/*  {JSON.stringify(user)} */}</div>
              <div className="card-body">
                <ul>
                  <li>{user.userName} </li>
                  <li>{user.email} </li>
                  <li>{user.mobile} </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Registraion;
