import React, { useState, useEffect } from "react";
import axios from "axios";
import Userlist from "./Userlist";
import UserCard from "./UserCard";

const User = () => {
  let [user, setUser] = useState({ container: [], error: null, selUser: {} });

  let getData = (selectedUser) => {
    console.log(selectedUser);

    console.log(selectedUser.id);
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${selectedUser.id}`)
      .then((response) => {
        console.log(response.data);
        setUser({ ...user, selUser: response.data });
      })
      .catch((err) => {
        setUser({ ...user, error: err });
      });
  };
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setUser({ ...user, container: response.data });
      })
      .catch((err) => {
        setUser({ ...user, error: err });
      });
  }, []);
  return (
    <div>
      <pre>{JSON.stringify(user.container)}</pre>
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <Userlist user={user.container} selectedUser={getData} />
          </div>
          <div className="col-md-3">
            {Object.keys(user.selUser).length > 0 ? (
              <>
                <UserCard selUser={user.selUser} />
              </>
            ) : (
              "null"
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
