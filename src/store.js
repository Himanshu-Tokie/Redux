import { createStore, combineReducers } from 'redux';
import reducers from './reducer';


// const rootReducer = combineReducers({
//     counter: PlaceReducer.PlaceReducer
// });

// Create the Redux store
const store = createStore(reducers);

export default store;
