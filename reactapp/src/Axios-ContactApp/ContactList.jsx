import React from "react";
class ContactList extends React.Component {
  /*   constructor(props) {
    super(props);
  } */
  pushData = (contact) => {
    console.log("Selected Contact:", contact);
    this.props.pullData(contact);
  };
  render() {
    return (
      <>
        {/*  <pre>{JSON.stringify(this.props.contactData)}</pre> */}
        <div className="container">
          <div className="row">
            <div className="col">
              <table className="table table-hover table-striped">
                <thead className="bg-primary">
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.contactData != null ? (
                    <>
                      {this.props.contactData.map((contact) => {
                        return (
                          <tr onMouseOver={this.pushData.bind(this, contact)}>
                            <td>{contact.login.uuid}</td>
                            <td>{contact.name.last}</td>

                            <td>{contact.dob.age}</td>
                            <td>{contact.email}</td>
                          </tr>
                        );
                      })}
                    </>
                  ) : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default ContactList;
