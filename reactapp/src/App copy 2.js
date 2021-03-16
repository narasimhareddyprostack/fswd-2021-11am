import React from "react";
import WishMessage from "./Wish/WishMessage";
import store from "./redux/store";
import { Provider } from "react-redux";
import ProductCounter from "./ProductCounter/Counter";
let App = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark">
        <a href="/"> React Redux Basic Example</a>
      </nav>
      <Provider store={store}>
        <WishMessage />
        <ProductCounter />
      </Provider>
    </React.Fragment>
  );
};
export default App;
