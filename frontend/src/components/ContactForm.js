import { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:1812/api/contacts", form);
    window.location.reload();
  };

  return (
  <form className="form" onSubmit={handleSubmit}>
    <div className="input-row">
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="email" placeholder="Email" onChange={handleChange} required />
      <input name="phone" placeholder="Phone" onChange={handleChange} required />
    </div>

    <button type="submit" className="add-btn">Add Contact</button>
  </form>
);
}

export default ContactForm;