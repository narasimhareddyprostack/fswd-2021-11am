import React from "react";
class ContactCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h1>Contact Card</h1>
        {this.props.selectedContact != null ? (
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="card">
                  <div className="card-header">
                    <img src={this.props.selectedContact.picture.large} />
                  </div>
                  <div classNam="card-body">
                    <ul className="list-group">
                      <li className="list-group-item">
                        {this.props.selectedContact.name.last}
                      </li>
                      <li className="list-group-item">
                        {this.props.selectedContact.email}
                      </li>
                      <li className="list-group-item">
                        {this.props.selectedContact.gender}
                      </li>
                      <li className="list-group-item">
                        {this.props.selectedContact.dob.age}
                      </li>
                      <li className="list-group-item">
                        {this.props.selectedContact.location.city}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          "null"
        )}
      </>
    );
  }
}
export default ContactCard;
