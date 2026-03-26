import { useEffect, useState } from "react";
import axios from "axios";

function ContactList() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const res = await axios.get("https://contact-app-vulu.onrender.com/api/contacts");
    setContacts(res.data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const deleteContact = async (id) => {
    await axios.delete(`https://contact-app-vulu.onrender.com/api/contacts/${id}`);
    fetchContacts();
  };

  return (
    <div>
      {contacts.map((c) => (
        <div className="card" key={c._id}>
          <div>
            <strong>{c.name}</strong>
            <p>{c.email}</p>
            <p>{c.phone}</p>
          </div>
          <button onClick={() => deleteContact(c._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ContactList;
