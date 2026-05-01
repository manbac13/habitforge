import { combineReducers } from "@reduxjs/toolkit";
import trackerReducer from "@/features/tracker/trackerSlice";
import settingsReducer from "@/features/settings/settingsSlice";

const rootReducer = combineReducers({
  tracker: trackerReducer,
  settings: settingsReducer,
});

export default rootReducer;
