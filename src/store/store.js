import { combineReducers, createStore } from 'redux';
import userReducer from '../reducers/ApiReducer';



const store = createStore(userReducer);

export default store;
