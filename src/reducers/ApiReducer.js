import { SET_USERS } from "../actions/type";

const initialState = {
    users: [],
  };
  
  
  export default function  ApiReducer(state = initialState, action)  {
    switch (action.type) {
      case SET_USERS:
        return { ...state, users: action.payload };
      default:
        return state;
    }
  };