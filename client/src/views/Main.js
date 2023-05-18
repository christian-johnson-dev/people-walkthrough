import { useState } from "react";

import ContactForm from "../components/ContactsForm";
import ContactsList from "../components/ContactsList";

const Main = (props) => {
  const [allContacts, setAllContacts] = useState([]);

  return (
    <div>
      <ContactForm allContacts={allContacts} setAllContacts={setAllContacts} />
      <ContactsList allContacts={allContacts} setAllContacts={setAllContacts} />
    </div>
  );
};

export default Main;
