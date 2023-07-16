import { combineReducers } from "@reduxjs/toolkit";

import userSlice from "../pages/Users/service/userSlice";

export const rootReducer = combineReducers({
  users: userSlice
});
