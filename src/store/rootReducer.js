import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "@/features/auth/authSlice";
import goalsReducer from "@/features/goals/goalsSlice";
import settingsReducer from "@/features/settings/settingsSlice";
import notificationReducer from "@/features/notifications/notificationSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  goals: goalsReducer,
  settings: settingsReducer,
  notification: notificationReducer,
});

export default rootReducer;
