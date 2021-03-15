//create user action types
const DECR = "Ashish";
const INCR = "Ganesh";

//create actions
let incrAction = () => {
  return {
    type: INCR,
  };
};
let decrAction = () => {
  return {
    type: DECR,
  };
};

//export action types and actions

export { DECR, INCR, decrAction, incrAction };
