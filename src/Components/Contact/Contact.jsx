import { FaUser, FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  // Отримуємо посилання на функцію відправки екшенів

  return (
    <>
      <div className={css.userContact}>
        {" "}
        <p>
          <FaUser className={css.Icon} />
          {contact.name}
        </p>
        <p>
          <FaPhone className={css.Icon} />
          {contact.number}
        </p>
      </div>
      <button onClick={handleDelete} className={css.buttonDel}>
        Delete
      </button>
    </>
  );
}
