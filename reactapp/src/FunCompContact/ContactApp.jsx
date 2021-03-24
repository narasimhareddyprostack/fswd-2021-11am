import React, { useEffect, useState } from "react";
import Axios from "axios";
import ContactList from "./ContactList";
import ContactCard from "./ContactCard";
let ContactApp = () => {
  let [contact, setContact] = useState({
    contacts: [],
    errMessage: null,
    selectedContact: {},
  });
  useEffect(() => {
    Axios.get(
      "https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist"
    )
      .then((response) => {
        /*  console.log(response); */
        setContact({ ...contact, contacts: response.data });
      })
      .catch(() => {});
  }, []);

  let pullData = (selcontact) => {
    //logic
    console.log(selcontact);
    console.log(selcontact.name.first, "getting data from child ...");
    console.log(contact.selectedContact, ".....");
    setContact({ ...contact, selectedContact: selcontact });
    console.log(contact.selectedContact, ".....");
  };
  return (
    <React.Fragment>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8">
            {contact.contacts.length > 0 ? (
              <>
                <ContactList contacts={contact.contacts} pullData={pullData} />
              </>
            ) : null}
          </div>
          <div className="col-md-4">
            {Object.keys(contact.selectedContact).length > 0 ? (
              <>
                <ContactCard selectedContact={contact.selectedContact} />
              </>
            ) : null}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default ContactApp;
