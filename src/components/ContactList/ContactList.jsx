import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import css from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

export default function ContactList() {
  const filterContact = useSelector(selectNameFilter);
  const contactListRedux = useSelector(selectContacts);
  const filteredContacts = contactListRedux.filter(
    (contact) =>
      contact.name &&
      contact.name.toLowerCase().includes(filterContact.name.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={css.contact}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
