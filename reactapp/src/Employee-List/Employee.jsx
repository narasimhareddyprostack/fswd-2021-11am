import React, { Component, Fragment } from "react";

import { employeeData } from "./../Static/Data/EmployeeData";

export class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: employeeData,
    };
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
                  {this.state.employees.map((employee) => {
                    return (
                      <tr>
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
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Employee;
