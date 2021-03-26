import React from "react";

const Userlist = (props) => {
  let userInfo = (data) => {
    props.selectedUser(data);
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col md-8">
            <pre>{JSON.stringify(props.user)}</pre>
            <table className="table table-stripped">
              <thead>
                <tr>
                  <th>ToDo ID</th>
                  <th>Title</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {props.user.length > 0 ? (
                  <React.Fragment>
                    {props.user.map((data) => {
                      return (
                        <tr key={data.id}>
                          <td>{data.id}</td>
                          <td>{data.title}</td>
                          <td>{data.completed.toString()}</td>
                          <td>
                            <button
                              className="btn btn-success"
                              onClick={userInfo.bind(this, data)}
                            >
                              User Info
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </React.Fragment>
                ) : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userlist;
