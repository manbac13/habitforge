import { combineReducers } from "@reduxjs/toolkit";
import trackerReducer from "@/features/tracker/trackerSlice";

const rootReducer = combineReducers({
  tracker: trackerReducer,
});

export default rootReducer;
