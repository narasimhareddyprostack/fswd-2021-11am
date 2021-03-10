//action types
/*
using this action types, our reducer will update the store.
*/

const GOODMORNING = "GOODMORNING";
const GOODAFTERNOON = "GOODAFTERNOON";
const GOODNIGHT = "GOODNIGHT";
sayGMAction = () => {
  return {
    type: GOODMORNING,
  };
};
sayGAAction = () => {
  return {
    type: GOODAFTERNOON,
  };
};

sayGNAction = () => {
  return {
    type: GOODNIGHT,
  };
};

export {
  GOODMORNING,
  GOODAFTERNOON,
  GOODNIGHT,
  sayGMAction,
  sayGAAction,
  sayGNAction,
};
