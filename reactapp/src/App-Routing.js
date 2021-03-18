import React from "react";
/* import { Provider } from "react-redux";
import store from "./redux/store";
 */

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Routing-Example/Components/Navbar";
import ContactList from "./Axios-ContactApp/ContactList";

import { EmployeeApp } from "./Employee-List/EmployeeApp";
function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/home" component={ContactList} />
          <Route exact path="/aboutus" component={EmployeeApp} />
          <Route exact path="/contactdata" component={ContactList} />
          <Route exact path="/contactus" component={ContactList} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
