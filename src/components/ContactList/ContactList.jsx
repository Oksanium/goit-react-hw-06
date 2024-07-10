import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";

export default function ContactList({ query }) {
  const list = useSelector(selectContacts);

  function renderList(contact) {
    return <Contact contact={contact} key={contact.id} id={contact.id} />;
  }

  return (
    <div className={s.list}>
      {list
        .filter((elem) => {
          return elem.name.toLowerCase().includes(query);
        })
        .map(renderList)}
    </div>
  );
}
