import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import css from "./ContactList.module.css";

export default function ContactList() {
  const filterContact = useSelector((state) => state.filter);
  const contactListRedux = useSelector((state) => state.contacts);
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
// onDelete={onDelete}
// const handleDelete = () => dispatch(deleteTask(task.id));
// const delContact = (contactId) => {
//   setContacts((prevContacts) => {
//     return prevContacts.filter((contact) => contact.id !== contactId);
//   });

// const filteredContacts = contacts.filter((contact) =>
//   contact.name.toLowerCase().includes(filter.toLowerCase())
// );
