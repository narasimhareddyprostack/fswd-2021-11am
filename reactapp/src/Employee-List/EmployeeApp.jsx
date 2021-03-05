import React, { Component, Fragment } from "react";
import Axios from "axios";

export class EmployeeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      errmessage: null,
      obj: null,
    };
  }
  componentDidMount() {
    const EmpURL =
      "https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist";
    Axios.get(EmpURL)
      .then((response) => {
        console.log(response);
        this.setState({
          employees: response.data,
          obj: response,
        });
      })
      .catch((err) => {
        this.setState({
          errmessage: err,
        });
      });
  }
  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3"> Employee List</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                nisl eros, pulvinar facilisis justo mollis, auctor consequat
                urna. Morbi a bibendum metus. Donec scelerisque sollicitudin
                enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci
                vestibulum eget. Class aptent taciti sociosqu ad litora torquent
                per conubia nostra, per inceptos himenaeos.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <table className="table table-hover table-striped ">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Employee Name</th>
                    <th>Image</th>
                    <th>Employee Age</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.employees.length === 0 ? (
                    ""
                  ) : (
                    <>
                      {this.state.employees.map((employee) => {
                        return (
                          <tr key={employee.login.uuid}>
                            <td>
                              {employee.login.uuid.substr(
                                employee.login.uuid.length - 10
                              )}
                            </td>
                            <td>{employee.name.last}</td>
                            <td>
                              <img
                                src={employee.picture.medium}
                                width="70px"
                                height="70px"
                              />
                            </td>
                            <td>{employee.dob.age}</td>
                            <td>{employee.gender.toLocaleUpperCase()}</td>
                            <td>{employee.email}</td>
                            <td>{employee.location.street.name}</td>
                          </tr>
                        );
                      })}
                    </>
                  )}
                </tbody>
              </table>
              <hr />
              {JSON.stringify(this.state.obj)}
              <hr />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default EmployeeApp;
