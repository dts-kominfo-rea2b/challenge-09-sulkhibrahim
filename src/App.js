import React from "react";
import "./App.css";

import Header from "./components/Header";
import Contact from "./components/Contact";

// Uncomment untuk memuat daftar kontak
import contacts from "./data/contacts.json";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="contact__wrapper">
        <Contact data={contacts[0]} />
        <Contact data={contacts[1]} />
        <Contact data={contacts[2]} />
        <Contact data={contacts[3]} />
        <Contact data={contacts[4]} />
        <Contact data={contacts[5]} />
      </main>
    </div>
  );
};

export default App;