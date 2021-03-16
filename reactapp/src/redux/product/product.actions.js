//create Action Types
const INCR = "INCR";
const DECR = "DECR";
//create Actions
let incrAction = () => {
  return { type: INCR };
};

let decrAction = () => {
  return { type: DECR };
};
//export actions and action types

export { INCR, DECR, incrAction, decrAction };
