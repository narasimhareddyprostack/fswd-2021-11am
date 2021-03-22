import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <a href="/"> React Form - Hooks</a>
        <Link to="/User">User</Link>
        <Link to="/Login">Login</Link>
        <Link to="Digital">Digital</Link>
      </nav>
    </div>
  );
}

export default Navbar;
