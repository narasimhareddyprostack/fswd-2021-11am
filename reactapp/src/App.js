/* import ParentComp from "./components/ParentComp"; */
import CompA from "./Props-Drilling/CompA";
let App = () => {
  let emp = {
    name: "Chiru",
    sal: 60000,
  };
  return (
    <>
      <h1>Testing</h1>
      <hr />
      <CompA empData={emp} />
      {/*  <ParentComp /> */}
    </>
  );
};

export default App;
