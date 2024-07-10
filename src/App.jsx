import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import "./App.css";

// import initContacts from "./assets/contacts.json";

import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm
        Formik={Formik}
        Form={Form}
        Field={Field}
        ErrorMessage={ErrorMessage}
        setQuery={setQuery}
        // addContact={addContact}
        // contacts={contacts}
        Yup={Yup}
      />
      <SearchBox setQuery={setQuery} />
      <ContactList
        // list={contacts}
        query={query}
        // deleteContact={deleteContact}
      />
    </div>
  );
}

export default App;
