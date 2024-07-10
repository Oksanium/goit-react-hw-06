import { configureStore } from "@reduxjs/toolkit";
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

import { addContact, deleteContact } from "./contactsSlice";

const persistConfig = {
  key: "root",
  storage,
};
const persistedAdd = persistReducer(persistConfig, addContact);
const persistedDelete = persistReducer(persistConfig, deleteContact);

export const store = configureStore({
  reducer: {
    persistedAdd,
    persistedDelete,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
