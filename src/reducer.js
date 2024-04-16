// reducers.js
import { createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const countReducer = (state = 0, action) => {
  switch (action.type) {
    case 'increment':
      return state+1;
    case 'decrement':
      return state - 1;
    case 'timer':
      return state+100;
      case 'thunkTimer':
      return state-100;
      
    default:
      return state;
  }
};


// asychronous Middleware
export const simpleMiddleware = (storeAPI) =>next=>action=> {
  switch(action.type){
    case 'timer':
      setTimeout(()=>{next(action)},1000)
      break;
    default:
      next(action)
  }
}

export const thunkMiddleaware = ()=>{
  return async (dispatch,getState)=>{
  setTimeout(()=>{dispatch({type:'thunkTimer'})},1000)
}}

// function* sagaMiddleware(){
//   yield 
// }
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

// const rootReducer = combineReducers({
//   count: countReducer,
//   // greet: greetReducer
// });

export const Slice = createSlice({
  name:'counter',
  initialState:{count:0},
  reducers:{
    increment:(state)=>{state.count+=1},
    decrement:(state)=>{state.count-=1}
  }
})

export const counterReducer = Slice.reducer
export const {increment,decrement} = Slice.actions
// export default rootReducer;


