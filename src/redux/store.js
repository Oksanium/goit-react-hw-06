import { configureStore } from "@reduxjs/toolkit";

import { devToolsEnhancer } from "@redux-devtools/extension";
// import { persistStore, persistReducer } from "redux-persist";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { contactsReducer } from "./contactsSlice";

const persistConfig = {
  key: "root",
  storage,
};
const persistedContacts = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedContacts,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
const enhancer = devToolsEnhancer();
export const persistor = persistStore(store);
