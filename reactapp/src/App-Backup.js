import React from "react";
import ContactApp from "./Axios-ContactApp/ContactApp";

function App() {
  return (
    <>
      <nav className="navbar nav-dark bg-dark">
        <a href="/"> React HTTP - Axios Contact App</a>
      </nav>
      <ContactApp />
    </>
  );
}

export default App;
