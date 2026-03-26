import React from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>📇 Contact Manager</h1>
      <ContactForm />
      <ContactList />
    </div>
  );
}

export default App;