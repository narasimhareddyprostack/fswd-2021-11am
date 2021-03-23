import React from "react";
import User from "./Hooks2/User";
import Login from "./Hooks2/Login";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Time from "./Hooks2/Time";
import Navbar from "./Hooks2/Navbar";
import HttpEx from "./IS-Comp/HttpEx";
let App = () => {
  return (
    <React.Fragment>
      {/*   <Router>
        <Navbar />
        <Switch>
          <Route exact path="/User" component={User}></Route>
          <Route exact path="/Login" component={Login}></Route>
          <Route exact path="/Digital" component={Time}></Route>
        </Switch>
      </Router> */}
      <HttpEx />
    </React.Fragment>
  );
};
export default App;
