import React from "react";
import Dummy from "./Dummy/Dummy";
function App() {
  let x = {
    name: "Narasimha",
    sal: 1000,
    loc: ["SG", "IN", "USA"],
  };
  return (
    <>
      <Dummy {...x} />
    </>
  );
}

export default App;
