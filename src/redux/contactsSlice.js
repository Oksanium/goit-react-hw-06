import { createSlice } from "@reduxjs/toolkit";
import initContacts from "../assets/contacts.json";

console.log(initContacts);

const initialState = {
  // contacts: JSON.parse(localStorage.getItem("Phonebook")) || initContacts,
  contacts: initContacts,
};

const slice = createSlice({
  name: "contacts",
  state: initialState,
  selectors: {
    selectContacts: (state) => state.contacts,
  },

  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      return state.contacts.filter((item) => {
        item.id !== action.payload;
      });
    },
  },
});

export const contactsReducer = slice.reducer;
export const { addContact, deleteContact } = slice.actions;
export const { selectContacts } = slice.selectors;
