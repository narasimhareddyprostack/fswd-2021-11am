import React from "react";
import Counter from "./Hooks/Counter/Counter";
import Message from "./Hooks/Wish/Message";
import Product from "./Hooks/Product/Product";
function App() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <a href="/"> React Hooks</a>
      </nav>
      <Counter />
      <Message />
      <Product />
    </div>
  );
}

export default App;
