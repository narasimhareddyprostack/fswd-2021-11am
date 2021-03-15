//create Action Types
const GOODMONRING = "GOODMONRING";
const GOODAFTERNOON = "GOODAFTERNOON";
const GOODNIGHT = "GOODNIGHT";

//create Actions
let sayGMAction = (value) => {
  console.log("Testing 123");
  return {
    type: GOODMONRING,
    payload: value,
  };
};
let sayGAAction = () => {
  return {
    type: GOODAFTERNOON,
  };
};
let sayGNAction = () => {
  return {
    type: GOODNIGHT,
  };
};
//export action - values
export {
  GOODMONRING,
  GOODAFTERNOON,
  GOODNIGHT,
  sayGMAction,
  sayGAAction,
  sayGNAction,
};
