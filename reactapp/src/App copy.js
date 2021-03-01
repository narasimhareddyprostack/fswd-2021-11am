/* import ParentComp from "./components/ParentComp"; */
import { UserContext, MethodContext } from "./ContextAPI/UserContext";
import CompA from "./ContextAPI/CompA";
let App = () => {
  let emp = {
    name: "Chiru",
    sal: 60000,
  };
  let getHike = () => {
    console.log("Testing... getHike function in app");
  };
  return (
    <>
      <h1>Component - App </h1>
      <h5> data: {JSON.stringify(emp)}</h5>
      <UserContext.Provider value={emp}>
        <MethodContext.Provider value={getHike}>
          <CompA />
        </MethodContext.Provider>
      </UserContext.Provider>
    </>
  );
};

export default App;
