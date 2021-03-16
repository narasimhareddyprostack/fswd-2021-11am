import React from "react";
/* import Counter from "./components-one/Counter"; */
import { Provider } from "react-redux";
import store from "./redux/store";

import ProductList from "./Components-one/ProductList";
function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        {/*   <Counter /> */}
        <ProductList />
      </Provider>
    </React.Fragment>
  );
}

export default App;
