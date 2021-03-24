import React from "react";
let ContactCard = (props) => {
  return (
    <>
      <pre>{JSON.stringify(props.selectedContact)}</pre>

      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <img src={props.selectedContact.picture.large} alt="" />
              </div>
              <div className="card-body">
                <ul>
                  <li>{props.selectedContact.name.last}</li>
                  <li>{props.selectedContact.dob.age}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
