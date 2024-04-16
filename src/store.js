// import { createStore, combineReducers, applyMiddleware } from 'redux';
// // import reducers, { Slice, simpleMiddleware } from './reducer';
// import SliceRedux, { counterReducer } from './reducer'
// import { thunk } from 'redux-thunk';
// import { configureStore } from '@reduxjs/toolkit';


// // const rootReducer = combineReducers({
// //     counter: PlaceReducer.PlaceReducer
// // });

// // Create the Redux store
// // const Middleware = applyMiddleware(thunk)
// // const store = createStore(reducers,Middleware);

// const Store = configureStore({
//     reducer:{
//         counter: counterReducer,
//     }
// })
// export default Store;


import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './reducer'; // Import the reducer function

const store = configureStore({
    reducer: {
        counter: counterReducer // Use the reducer function for the 'counter' slice
    }
});
export default store;