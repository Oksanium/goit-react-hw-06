import s from "./ContactList.module.css";
import ContactItem from "../ContactItem/ContactItem";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";

export default function ContactList({ query }) {
  const list = useSelector(selectContacts);

  function renderList(contact) {
    return <ContactItem contact={contact} key={contact.id} id={contact.id} />;
  }

  console.log(list);

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
