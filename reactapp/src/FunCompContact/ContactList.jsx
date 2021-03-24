import React from "react";
let ContactList = (props) => {
  let pushData = (contact) => {
    props.pullData(contact);
  };
  return (
    <React.Fragment>
      <pre>{JSON.stringify(props.contacts)}</pre>
      <div className="container">
        <div className="row">
          <div className="col">
            <table className="table table-hover striped table-info">
              <thead>
                <tr>
                  <th> Name</th>
                  <th> Image </th>
                  <th> Email </th>
                  <th> Loc </th>
                  <th> Age</th>
                </tr>
              </thead>
              <tbody>
                {props.contacts.length > 0 ? (
                  <React.Fragment>
                    {props.contacts.map((contact) => {
                      return (
                        <tr
                          key={contact.login.uuid}
                          onClick={pushData.bind(this, contact)}
                        >
                          <td>{contact.name.first}</td>
                          <td>
                            <img src={contact.picture.medium} alt="message" />
                          </td>
                          <td>{contact.email}</td>
                          <td>{contact.location.city}</td>
                          <td>{contact.dob.age}</td>
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
    </React.Fragment>
  );
};
export default ContactList;
