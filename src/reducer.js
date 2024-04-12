// reducers.js
import { combineReducers } from 'redux';

const countReducer = (state = 0, action) => {
  switch (action.type) {
    case 'increment':
      return state+1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
};

const greetReducer = (state = '', action) => {
  // Handle actions for greet state if needed
  switch (action.type) {
    case 'increment':
      return state="Hi";
    case 'decrement':
      return state ="Hello";
    default:
      return state;
  }
  return state;
};

const rootReducer = combineReducers({
  count: countReducer,
  // greet: greetReducer
});

export default rootReducer;


