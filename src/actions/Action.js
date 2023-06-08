import { SET_USERS } from "./type"


export const getDataUser = (data) =>  {
  return { type: SET_USERS, payload: data };
  
};