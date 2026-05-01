import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

import storageModule from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const storage = storageModule.default;
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["tracker", "settings"], // which slices to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // required for redux-persist
    }),
});

export const persistor = persistStore(store);
